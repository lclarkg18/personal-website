import React from 'react';

import { Trans } from 'react-i18next';

import { LanguageObject } from '../types';
import { getPathWithoutLng } from '../helpers';

interface FooterProps {
  languageObject: LanguageObject
}

export default function Footer({ languageObject }: FooterProps) {
  function filterLanguages() {
    return new Map(
      [...languageObject.flagCodes]
        .filter(([lang]) => lang !== languageObject.activeLanguage),
    );
  }

  return (
    <div className="container is-max-widescreen level">
      <div className="level-left">
        <div className="level-item">
          <Trans i18nKey="footer.open-source-note">
            <span style={{ whiteSpace: 'pre-wrap' }} />
            <a href="https://github.com/lclarkg18/personal-website" target="_blank" rel="noreferrer" />
          </Trans>
        </div>
      </div>
      <div className="level-right">
        {[...filterLanguages().entries()].map(([lang, flag]) => (
          <a key={`${lang}_flag`} className="is-64x64" href={`/${lang}/${getPathWithoutLng()}`} rel="noreferrer">
            <img
              width={30}
              alt={`${flag}-Flag`}
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${flag}.svg`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
