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
        <p className="middle">Our <span style={{color: '#ac006c'}}>incredible</span> interior design solution will be ready shortly. Want to be notified as soon as it's live?</p>
      </div>
      <div className="form">
        <EmailForm/>
      </div>
      <div>
        <p className="p">We promise never to spam you</p>
      </div>
      <div className="social">
        <p className="p">Check us out on social media:</p>
        <SocialLinks/>
      </div>
    </div>
  );
}

export default App;
