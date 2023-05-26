import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Main from '../Main/Main';
import MainAr from '../MainAr/MainAr';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Automation from '../Automation/Automation';
import AutomationAr from '../AutomationAr/AutomationAr';

function App() {
  return (
    <div className="page">
      <div className='content'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/automation' element={<Automation />}></Route>
          <Route path='/ar' element={<MainAr />}></Route>
          <Route path='/automationar' element={<AutomationAr />}></Route>
        </Routes>
        <Footer />
      </div>

    </div>
  );
}

export default App;
