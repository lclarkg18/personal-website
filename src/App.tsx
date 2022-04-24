import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './i18n/config.ts';
import { useTranslation } from 'react-i18next';
import NavBar from './components/navbar';

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState<string>('es');

  useEffect(() => {
    const changeLanguageHandler = async (lang: string) => {
      await i18n.changeLanguage(lang);
    };

    changeLanguageHandler(language).catch((e) => console.log(e));
  }, [language]);

  return (
    <nav>
      <header className="header">
        <NavBar />
      </header>
      <main className="section">
        <text> Insert webpage here</text>
      </main>
    </nav>
  );
}

export default App;
