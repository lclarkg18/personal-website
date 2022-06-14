import React from 'react';
import 'bulma/css/bulma.css';

export default function PersonalWebsiteTitle(): JSX.Element {
  return (
    <div>
      <p>
        Personal Website
        {'  '}
        <a
          style={{ color: 'black', textDecoration: 'none' }}
          href="https://github.com/lclarkg18/personal-website"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <i className="devicon-github-original" />
        </a>
      </p>
    </div>
  );
}
