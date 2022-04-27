import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <nav className="navbar has-text-weight-bold" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarElements"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
          <Link to={`/${i18n.language}`}>
            <figure className="image is-64x64 is-hidden-touch">
              <img alt="LIAM" src={require('../static/images/head-shot.jpg')} className="is-rounded" />
            </figure>
          </Link>
        </div>

        <div id="navbarElements" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item is-active" to={`/${i18n.language}/about`}>
              <span className="navbar-item-name">
                {t('navbar-sections.about')}
              </span>
            </Link>

            <Link className="navbar-item" to={`/${i18n.language}/projects`}>
              <span className="navbar-item-name">
                {t('navbar-sections.projects')}
              </span>
            </Link>

            <a className="navbar-item">
              <span className="navbar-item-name">
                {t('navbar-sections.blog')}
              </span>
            </a>
          </div>
          <div className="navbar-end">
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

export default NavBar;
