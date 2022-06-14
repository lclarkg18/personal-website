import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import pictureOfMe from '../static/images/head-shot.jpg';
import { getActiveSection } from '../helpers';

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>(getActiveSection());
  const [smallScreenMenuActivated, setSmallScreenMenuActivated] = useState<boolean>(false);
  const sections: string[] = ['about', 'projects', 'blog'];

  return (
    <div className="container is-max-widescreen">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to={`/${i18n.language}`} onClick={() => setActiveTab('')}>
            <figure className="image is-64x64 is-hidden-touch">
              <img alt="Liam" src={pictureOfMe} className="is-64x64 is-rounded" loading="lazy" />
            </figure>
            <div className="media is-hidden-desktop">
              <div className="media-left">
                <figure className="image is-48x48 is-hidden-desktop">
                  <img alt="Liam" src={pictureOfMe} className="is-rounded is-48x48" loading="lazy" />
                </figure>
              </div>
              <strong className="title is-5 is-hidden-desktop is-align-self-center">Liam Clark Gutiérrez</strong>
            </div>
          </Link>
          <a
            role="button"
            className={`navbar-burger ${(smallScreenMenuActivated ? 'is-active' : '')}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navigation"
            onClick={() => setSmallScreenMenuActivated(!smallScreenMenuActivated)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navigation" className={`navbar-menu ${(smallScreenMenuActivated ? 'is-active' : '')}`}>
          <div className="navbar-start">
            {sections.map((section) => (
              <Link
                key={`${section}_link`}
                className={`navbar-item ${activeTab === section ? 'is-active' : ''}`}
                to={`/${i18n.language}/${section}`}
                onClick={() => setActiveTab(section)}
              >
                <span className="navbar-item-name">
                  {t(`navbar-sections.${section}`)}
                </span>
              </Link>
            ))}
          </div>
          <div className="navbar-end">
            <a
              className="navbar-item is-size-5"
              title={t('links.stackoverflow')}
              href="https://stackoverflow.com/users/15547098/liam-clark-gutiérrez"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faStackOverflow} />
            </a>
            <a
              className="navbar-item is-size-5"
              title={t('links.github')}
              href="https://github.com/lclarkg18"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="navbar-item is-size-5"
              title={t('links.linkedin')}
              href="https://www.linkedin.com/in/liam-clark-gutierrez/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
