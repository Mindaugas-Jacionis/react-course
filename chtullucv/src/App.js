import React from 'react';
import Icon from 'react-fontawesome';
import 'reset-css';
import './App.css';

function App() {
  const portrait =
    'https://cdn.shopify.com/s/files/1/0784/0801/products/Cthulhu_S_F_400x.jpg?v=1508421201';

  return (
    <div className="App">
      <div className="App-container">
        <header className="Header">
          <h1 className="Header-headline">Chtullu</h1>
          <hr />
          <img
            className="Header-image"
            src={portrait}
            alt="chtullu profesional portriat"
          />
          <div className="Header-content">
            <p className="Header-contacts">
              <span>Phone</span> +37069999999
            </p>
            <p className="Header-contacts">
              <span>Email</span> email@test.com
            </p>
            <p className="Header-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque posuere quis arcu id consequat. Curabitur a fringilla
              massa, sed cursus nisi. Integer vulputate sit amet ligula ac
              venenatis. Sed ullamcorper id lacus a suscipit. Ut eu imperdiet
              tortor. In hac habitasse platea dictumst. Maecenas risus ligula,
              malesuada vitae nibh et, dapibus rhoncus augue. Integer non felis
              sagittis, cursus diam a, luctus lectus. Cras porttitor tellus et
              dolor cursus feugiat sit amet quis augue. Praesent dui mauris,
              porttitor eu mollis id, sagittis quis mauris.
            </p>
          </div>
        </header>
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
                JavaScript(ES6+), React.js, Node.js, Vue.js, HTML,
                CSS/SASS/Less, Express.js, Webpack, Redux.js
              </p>
            </div>
          </section>
          {/* TODO: Experience */}
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
      </div>
      <footer className="Footer">
        <a
          href="mailto:example@test.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="envelope" />
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="linkedin" />
        </a>
        <a href="tel:+37069999999" target="_blank" rel="noopener noreferrer">
          <Icon name="phone" />
        </a>
        {/* TODO: Add github link icon here */}
      </footer>
    </div>
  );
}

export default App;
