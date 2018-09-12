import React from 'react';
import 'reset-css';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
