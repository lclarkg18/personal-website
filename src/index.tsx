import React from 'react';

import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './main.css';
import i18n from 'i18next';
import './i18n/config';

import reportWebVitals from './reportWebVitals';

import App from './App';
import About from './routes/about';
import Projects from './routes/projects';
import Blog from './routes/blog';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const languages: string[] = ['es', 'en'];
const flagCodes: Map<string, string> = new Map();
flagCodes.set('es', 'ES');
flagCodes.set('en', 'GB');

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {languages.map((language) => (
          <Route path={`${language}/`} element={<App languageObject={{ activeLanguage: language, languageOptions: languages, flagCodes }} />}>
            <Route path="projects/" element={<Projects />} />
            <Route path="about/" element={<About />} />
            <Route path="blog/" element={<Blog />} />
          </Route>
        ))}
        <Route
          path="/"
          element={<Navigate to={`/${i18n.resolvedLanguage}`} replace />}
        />
        <Route path="*" element={<h1> 404 </h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
