import React from 'react';

import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import About from './routes/about';
import Projects from './routes/projects';
import Blog from './routes/blog';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const languages: string[] = ['es', 'en'];

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {languages.map((language) => (
          <Route path={`${language}/`} element={<App expectedLng={language} />}>
            <Route path="projects/" element={<Projects />} />
            <Route path="about/" element={<About />} />
            <Route path="blog/" element={<Blog />} />
          </Route>
        ))}
        <Route
          path="/"
          element={<Navigate to={`/${i18n.resolvedLanguage}`} replace />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
