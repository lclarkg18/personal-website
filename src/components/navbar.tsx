import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import pictureOfMe from '../static/images/head-shot.jpg';

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('');
  const [smallScreenMenuActivated, setSmallScreenMenuActivated] = useState<boolean>(false);
  const sections: string[] = ['about', 'projects', 'blog'];

  return (
    <div className="container is-max-widescreen">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to={`/${i18n.language}`} onClick={() => setActiveTab('')}>
            <figure className="image is-64x64">
              <img alt="Liam" src={pictureOfMe} className="is-rounded" />
            </figure>
            <strong className="title is-5 is-hidden-desktop">Liam Clark Gutiérrez</strong>
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
          <div className="navbar-end is">
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
