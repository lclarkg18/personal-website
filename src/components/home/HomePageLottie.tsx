import React from 'react';
import { Link } from 'react-router-dom';
import i18n from 'i18next';
import HoverLottie from '../../animations/HoverLottie';
import { capitalise } from '../../helpers';
import { SetSectionState } from '../../types';

interface HomePageLottieProps {
  sectionName: string;
  animationData: any;
  setActiveSection: SetSectionState;
}

export default function HomePageLottie({ sectionName, animationData, setActiveSection }: HomePageLottieProps) {
  return (
    <div
      style={{
        backgroundColor: '#E0E0E0',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '10px',
        alignItems: 'center',
        margin: '20px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Link
        style={{ textDecoration: 'none' }}
        to={`/${i18n.language}/${sectionName}`}
        onClick={() => setActiveSection.setActiveSection(sectionName)}
      >
        <HoverLottie name={sectionName} animationData={animationData} width={200} height={200} />
        <h1 className="title is-3 is-flex is-justify-content-center" style={{ paddingBottom: '10px' }}>
          {capitalise(sectionName)}
        </h1>
      </Link>
    </div>
  );
}
