import React from 'react';

export default function Projects() {
  return (
    <>
      <h1 className="title is-1 has-text-weight-bold">Projects</h1>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification is-success">
            <div className="content">
              <p className="title">
                Slurp
                {' '}
                <i className="devicon-react-original" />
                {' '}
                <i className="devicon-firebase-plain" />
              </p>
              <div className="subtitle">
                <p>
                  Co-founded a start up that creates an order
                  ahead system for independent coffee shops.
                </p>
                <p>
                  Built two cross platform React Native apps,
                  one for coffee shops (iPad/Tablet) and one for coffee drinkers.
                </p>
                <p>
                  Registers users, offers location-based recommendations,
                  displays coffee shops using Google Maps API,
                  takes payments with Stripe and stores data in google&apos;s No-SQL DB Firestore.
                </p>
                <p>
                  Orders will appear on the coffee shop&apos;s device
                  instantly thanks to a network of listeners.
                </p>
                <p>
                  Extensively tested with automated end-to-end testing using Detox.
                </p>
              </div>
              <div className="content" />
            </div>
          </article>
        </div>
        <div className="tile is-vertical is-8">

          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title">
                  liamclark.com
                  {' '}
                  <i className="devicon-react-original" />
                  {' '}
                  <i className="devicon-typescript-plain" />
                </p>
                <div className="subtitle">
                  <p>You&apos;re looking right at it!</p>
                  <p>
                    A React-typescript multilingual website that looks
                    amazing thanks to CSS framework bulma.
                  </p>
                  <p>Deployed on a custom domain.</p>
                </div>
              </article>
              <article className="tile is-child notification is-warning">
                <p className="title">
                  Checkmates
                  {' '}
                  <i className="devicon-django-plain" />
                  {' '}
                  <i className="devicon-postgresql-plain" />
                  {' '}
                  <i className="devicon-bootstrap-plain" />
                </p>
                <div className="subtitle">
                  <p>
                    A django + SQL web app where users can register,
                    create clubs organise tournaments and compete.
                  </p>
                  <p>Fully tested and deployed with heroku.</p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">
                  GEI
                  {' '}
                  <i className="devicon-mongodb-plain" />
                  {' '}
                  <i className="devicon-express-original" />
                  {' '}
                  <i className="devicon-angularjs-plain" />
                  {' '}
                  <i className="devicon-nodejs-plain" />
                </p>
                <p className="subtitle">Coming soon...</p>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">
                Compsci course work
                {' '}
                <i className="devicon-java-plain-wordmark" />
                {' '}
                <i className="devicon-cplusplus-plain" />
                {' '}
                <i className="devicon-mysql-plain" />
                {' '}
                <i className="devicon-scala-plain" />
                {' '}
                <i className="devicon-javascript-plain" />
              </p>
              <p className="subtitle">
                From C++ to Java, studying computer science at King&apos;s College London
                taught me a wide range of skills that I put it to practice in many
                coursework.
              </p>
              <div className="content" />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
