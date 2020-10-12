import React from 'react';
import './App.css';
import EmailForm from './EmailForm';
import SocialLinks from './SocialLinks';
import Logo from './Kala.svg';

function App() {
  return (
    <div className="App">
      <img className="Logo" src={Logo} alt="Kala"/>
      <div>
        <p className="slogan">Online furniture shopping reinvented</p>
      </div>
      <div>
        <h3 className="loading">Coming Soon</h3>
      </div>
      <div>
        <p className="middle">Want to be notified as soon as it's live?</p>
      </div>
      <div className="form">
        <EmailForm/>
      </div>
      <div>
        <p className="p">We promise to never spam you</p>
      </div>
      <div className="social">
        <p className="p">Check us out on social media:</p>
        <SocialLinks/>
      </div>
    </div>
  );
}

export default App;
