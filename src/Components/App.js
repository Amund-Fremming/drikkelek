import React from 'react';
import Header from '../Base/Header';
import Navbar from "../Base/Navbar";
import LandingPage from './LandingPage';

const App = (props) =>  {

  return (
    <>
      <div>
        <Header />
        <LandingPage />
        <Navbar />
      </div>
    </>
  )
}

export default App;
