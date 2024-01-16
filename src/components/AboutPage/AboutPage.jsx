import React from 'react';
import NavMenu from '../NavMenu/NavMenu';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
      <div className="aboutContainer">
    <div>
      <NavMenu />
    </div>
      <div>
        <p>Happy Hops was designed to be a simple tool to help my brother and other budding(pun intended) beer brewing enthusiasts, to display their art to friends, family, and customers.  Very much like the hobby of home brewing the making of this app was a creative learning journey and will continue to be a space for me to continue to refine and recreate! </p>
      </div>
      <br></br>
      <h4>Next Steps</h4>
        <ul>
          <p>Refine styling and layout utilizing bootstrap.</p>
          <p>Build out display details</p>
          <p>Deploy to the Web!</p>
          <p>Put the app in the hands of my brother to get real user feedback.</p>

        </ul>
      <br></br>
      <ul>
        <h4>Tools Utilized</h4>
        <li>Node</li>
        <li>Javascript</li>
        <li>CSS</li>
        <li>Pool</li>
        <li>React</li>
        <li>React-Redux</li>
        <li>React-Sagas</li>

      </ul>
    </div>
  );
}

export default AboutPage;
