import React from 'react';
import { useTranslation } from 'react-i18next';
import { capitalise } from '../helpers';

export default function About() {
  const { t } = useTranslation();

  return (
    <main>
      <h1 className="title is-1 has-text-weight-bold">{capitalise(t('navbar-sections.about'))}</h1>
      <br />
      <h2 className="subtitle is-4 has-text-weight-bold">TL;DR</h2>
      <p> I'm a spanish-british CS student who loves coding, sustainable city design and </p>
    </main>
  );
}
