import React, { FC, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import './i18n/config.ts';
import { useTranslation } from 'react-i18next';
import NavBar from './components/navbar';

interface IProps {
  expectedLng: string
}

export default function App({ languageObject }: AppProps): JSX.Element {
  const { i18n } = useTranslation();
  const [language] = useState<string>(languageObject.activeLanguage);

  useEffect(() => {
    const changeLanguageHandler = async (lang: string) => {
      await i18n.changeLanguage(lang);
    };

    changeLanguageHandler(language).catch((e) => console.log(e));
  }, [language]);

  return (
    <div>
      <header className="header horizontal-padding">
        <NavBar />
      </header>
      <main className="section horizontal-padding">
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

        <br />
        <br />
        <br />

        <br />

        <br />

      </main>
      <footer className="footer">
        <Footer languageObject={languageObject} />
      </footer>
    </div>
  );
};

export default App;
