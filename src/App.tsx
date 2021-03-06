import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './i18n/config.ts';
import { useTranslation } from 'react-i18next';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { LanguageObject } from './types';
import Home from './routes/home';
import { getActiveSection, getPathWithoutLng } from './helpers';

interface AppProps {
  languageObject: LanguageObject; // All variables to do with language
}

export default function App({ languageObject }: AppProps): JSX.Element {
  const { i18n } = useTranslation();
  const isHomepage = getPathWithoutLng() === '';
  const [language] = useState<string>(languageObject.activeLanguage);
  const [activeSection, setActiveSection] = useState<string>(getActiveSection());

  useEffect(() => {
    const changeLanguageHandler = async (lang: string) => {
      await i18n.changeLanguage(lang);
    };

    changeLanguageHandler(language).catch();
  }, [language]);

  return (
    <div className="main">
      <header className="header">
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      </header>
      <main className="section" style={{ paddingTop: '0px' }}>
        <div className="container is-max-widescreen">
          {isHomepage ? <Home setActiveSection={setActiveSection} /> : <Outlet />}
        </div>
      </main>
      <footer className="footer">
        <Footer languageObject={languageObject} />
      </footer>
    </div>
  );
}
