import React, { FC, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import './i18n/config.ts';
import { useTranslation } from 'react-i18next';
import NavBar from './components/navbar';

interface IProps {
  expectedLng: string
}

const App: FC<IProps> = ({ expectedLng }: IProps): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [language] = useState<string>(expectedLng);

  useEffect(() => {
    const changeLanguageHandler = async (lang: string) => {
      await i18n.changeLanguage(lang);
    };

    changeLanguageHandler(language).catch((e) => console.log(e));
  }, [language]);

  function getPathWithoutLng() : string {
    const pathWithoutFirstSlash: string = useLocation().pathname.substring(1);
    const firstSlashLocation: number = pathWithoutFirstSlash.indexOf('/');
    if (firstSlashLocation === -1) {
      return '';
    }
    return pathWithoutFirstSlash.substring(firstSlashLocation + 1);
  }

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
        <div className="level horizontal-padding">
          <div className="level-left">

            <div className="level-item">
              <text>
                {t('footer.open-source-note1')}
&nbsp;
              </text>
              <a href="https://github.com/lclarkg18/personal-website" target="_blank" rel="noreferrer">
                {t('footer.open-source-note2')}
              </a>
            </div>
          </div>
          <div className="level-right">
            <a className="is-64x64" href={`/es/${getPathWithoutLng()}`} rel="noreferrer">
              <img
                width={30}
                alt="Español"
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
