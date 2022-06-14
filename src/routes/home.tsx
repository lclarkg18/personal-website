import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import HomePageLottie from '../components/home/HomePageLottie';
import aboutAnimation from '../animations/268-avatar-man-flat-edited.json';
import projectsAnimation from '../animations/409-tool-outline-edited.json';
import blogAnimation from '../animations/35-edit-outline-edited.json';

import './home.css';
import useWindowDimensions from '../miscelaneous/DimensionsHook';

export default function Home() {
  const { t, i18n } = useTranslation();
  const { height, width } = useWindowDimensions();
  const contactMeLink: string = i18n.language === 'es' ? 'mailto:work@liamclark.com?subject=Hola%20Liam!' : 'mailto:work@liamclark.com?subject=What\'s%20up%20Liam%3F';

  // @ts-ignore
  return (
    <main>
      <br />
      <h1 className="title is-1 has-text-weight-bold">
        I'm Liam, a Full-Stack
        <br />
        {' '}
        Software Developer based in London.
      </h1>
      <br />
      <div className={`is-flex is-justify-content-center ${width > 767 ? 'is-flex-direction-row' : 'is-flex-direction-column'}`}>
        <HomePageLottie sectionName="about" animationData={aboutAnimation} />
        <HomePageLottie sectionName="projects" animationData={projectsAnimation} />
        <HomePageLottie sectionName="blog" animationData={blogAnimation} />
      </div>
      <div style={{ paddingTop: 10, display: 'flex' }}>
        <a href={contactMeLink} style={{ color: '#8db2df' }}>
          <p className="effect effect-1 effect-2">
            {' '}
            <FontAwesomeIcon icon={faEnvelope} />
            {' '}
            Hit me up
            {' '}
          </p>
        </a>
      </div>
    </main>
  );
}
