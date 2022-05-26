import React from 'react';
import { useTranslation } from 'react-i18next';
import { capitalise } from '../helpers';

export default function Blog() {
  const { t } = useTranslation();

  return (
    <main>
      <h1 className="title is-1 has-text-weight-bold">{capitalise(t('navbar-sections.blog'))}</h1>
    </main>
  );
}
