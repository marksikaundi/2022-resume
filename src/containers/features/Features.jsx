import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Colaborations',
    text: 'Experienced with Github, Git, Vim, Emacs, Ubuntu, Gitlab',
  },
  {
    title: 'Testing',
    text: 'Web based system, Applications and embeded system',
  },
  {
    title: 'Maintainance',
    text: 'Once the website is developed it basically need maintainance and that what can be provided',
  },
  {
    title: 'Training',
    text: 'Offere computer skills trainings for all entry level to advanced level from web development, hardwares',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
