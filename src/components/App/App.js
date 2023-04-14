import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Automation from '../Automation/Automation';

function App() {
  return (
    <div className="page">
      <div className='content'>
        <Header />
        <Routes>
          <Route path='/Engineering' element={<Main />}></Route>
          <Route path='/Engineering/automation' element={<Automation />}></Route>
        </Routes>
        <Footer />
      </div>

    </div>
  );
}

export default App;
