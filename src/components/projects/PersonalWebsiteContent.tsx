import React from 'react';
import 'bulma/css/bulma.css';

export default function PersonalWebsiteContent(): JSX.Element {
  return (
    <div>
      <div style={{ padding: '10px' }}>

        <div>
          <p className="title is-3"> Front-End Technologies </p>
          <div className="tags">
            <span className="tag">React</span>
            <span className="tag">TypeScript</span>
            <span className="tag">HTML/CSS/JS</span>
            <span className="tag"><a href="https://bulma.io" target="_blank" rel="noreferrer">Bulma CSS</a></span>
            <span className="tag"><a href="https://reactrouter.com" target="_blank" rel="noreferrer">React Router</a></span>
            <span className="tag"><a href="https://www.i18next.com" target="_blank" rel="noreferrer">i18next</a></span>
          </div>
          <p className="text"> I had already used React Native to build Slurp, so learning React was a breeze. As with Slurp, I used the more modern implementation with functional components and create-react-app to get started. I have always been a huge fan of statically typed languages so I was really eager to try out typescript.</p>
          <br />
          <p className="text"> However, in my honest opinion, typescript was a little underwhelming, it seemed to create more problems than it solved. A bigger application is probably need for the compatibility troubles of TS to be outweighed by the benefits.</p>
          <br />
          <p className="text"> Being a bid fed up of bootstrap, I thought I would try a different CSS framework, although not flawless, bulma was a great catch, flexible but complete and extremely easy to use. </p>
          <br />
          <p className="text"> Being bilingual is an integral part of my upbringing and I wanted to capture that in my website. Although it is not strictly necessary to use external software, i18next makes programming a multilingual website seamless and very maintainable. </p>
          <br />
        </div>
        <div>
          <p className="title is-3"> Deployment </p>
          <div className="tags">
            <span className="tag">AWS Amplify</span>
            <span className="tag">AWS Cloud Watch</span>
          </div>
          <p className="text"> I first experimented deploying with heroku which I have used before, but I found it to be very slow and a big hassle to configure the custom domain link. AWS Amplify on the other hand makes it incredibly easy.</p>
          <br />
          <p className="text"> Although with heroku you only have to type &quot;git heroku push&quot; to push to deployment, AWS Amplify takes it a step further allowing you to create a seamless workflow that automatically deploys with each push. A really handy for a low-stakes projected like this site.</p>
          <br />
          <p className="text"> Then used AWS Cloud Watch to get alerts if anything goes wrong and to monitor usage.</p>
        </div>
      </div>
    </div>
  );
}
