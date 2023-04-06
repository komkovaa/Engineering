import React from 'react';
import './App.css';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <div className='content'>
        <Header />
        <Main />
        <Footer />
      </div>

    </div>
  );
}

export default App;
