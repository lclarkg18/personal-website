import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
// eslint-disable-next-line import/extensions
import './i18n/config.ts';
import { useTranslation } from 'react-i18next';
import NavBar from './components/navbar';
import Footer from './components/footer';
import { LanguageObject } from './types';

interface AppProps {
  languageObject: LanguageObject // All variables to do with language
}

export default function App({ languageObject }: AppProps): JSX.Element {
  const { i18n } = useTranslation();
  const [language] = useState<string>(languageObject.activeLanguage);

  useEffect(() => {
    const changeLanguageHandler = async (lang: string) => {
      await i18n.changeLanguage(lang);
    };

    changeLanguageHandler(language).catch();
  }, [language]);

  return (
    <div>
      <header className="section">
        <NavBar />
      </header>
      <main className="section">
        <div className="container is-max-widescreen">
          <Outlet />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <br />
          <br />
          <br />

          <br />
        </div>

      </main>
      <footer className="footer">
        <Footer languageObject={languageObject} />
      </footer>
    </div>
  );
}
