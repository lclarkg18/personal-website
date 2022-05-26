import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './home.css';

export default function Home() {
  const { t, i18n } = useTranslation();
  const contactMeLink: string = i18n.language === 'es' ? 'mailto:work@liamclark.com?subject=Hola%20Liam!' : 'mailto:work@liamclark.com?subject=What\'s%20up%20Liam%3F';

  return (
    <main>
      <br />
      <h1 className="title is-1 has-text-weight-bold">
        I'm Liam, a Full-Stack
        <br />
        {' '}
        Software Developer based in London.
      </h1>
      <div style={{ paddingTop: 10, display: 'flex' }}>
        <a href={contactMeLink} style={{ color: '#5f8bce' }}>
          <p className="effect effect-1">
            {' '}
            <FontAwesomeIcon icon={faEnvelope} />
            {' '}
            Hit me up
            {' '}
          </p>
        </a>
      </div>
      <div className="is-flex is-justify-content-center column">
        <br />
        <p className="subtitle"> (Beware, this webpage is under construction)</p>
      </div>
      <br />
    </main>
  );
}
