import React from 'react';
import './index.css';

function Main() {
  return (
    <main className="Content">
      <section className="Content-section">
        <div className="Content-section-title">
          <h3>Education</h3>
        </div>
        <div className="Content-section-description">
          <h3>CodeAcademy, Vilnius, Lithuania</h3>
          <p className="Content-section-info">
            <span className="Content-info-bold">Major:</span> JavaScript
          </p>
          <p className="Content-section-info">
            <span className="Content-info-bold">Minor:</span> vue.js
          </p>
        </div>
      </section>
      <section className="Content-section">
        <div className="Content-section-title">
          <h3>Skills</h3>
        </div>
        <div className="Content-section-description">
          <h3>Technical Skills</h3>
          <p className="Content-section-info">
            JavaScript(ES6+), React.js, Node.js, Vue.js, HTML, CSS/SASS/Less,
            Express.js, Webpack, Redux.js
          </p>
        </div>
      </section>
      <section className="Content-section">
        <div className="Content-section-title">
          <h3>Experience</h3>
        </div>
        <div className="Content-section-description">
          <div className="Content-description-container">
            <div className="Content-section-headline">
              <h3>Tesonet</h3>
              <p className="Content-section-subtitle">
                Sr.Frontend Engineer, 2017.08 - present
              </p>
            </div>
            <ul className="Content-section-list">
              <li>Code - do some coding with JavaScript</li>
              <li>Eat - whatever I found in the kitchen</li>
              <li>Sleep - at my desk</li>
              <li>Repeat - again and agian and...</li>
            </ul>
          </div>
          <div className="Content-description-container">
            <div className="Content-section-headline">
              <h3>Tesonet</h3>
              <p className="Content-section-subtitle">
                Sr.Frontend Engineer, 2017.08 - present
              </p>
            </div>
            <ul className="Content-section-list">
              <li>Code - do some coding with JavaScript</li>
              <li>Eat - whatever I found in the kitchen</li>
              <li>Sleep - at my desk</li>
              <li>Repeat - again and agian and...</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="Content-section">
        <div className="Content-section-title">
          <h3>Hobies</h3>
        </div>
        <div className="Content-section-description">
          <p className="Content-section-info">
            Coding, Walking, Drawing, Making Eye Contact, LOLing, Beard
            Grooming, Making my own Beard Oil
          </p>
        </div>
      </section>
      <section className="Content-section">
        <div className="Content-section-title">
          <h3>Reference</h3>
        </div>
        <div className="Content-section-description">
          <p className="Content-section-info">
            Chilly eating championship 2019, My Mom, Dad & Dog
          </p>
        </div>
      </section>
    </main>
  );
}

export default Main;
