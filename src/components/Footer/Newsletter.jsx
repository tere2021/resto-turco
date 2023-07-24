import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className='app__newsletter'>
    <div className='app__newsletter-heading'>
      <SubHeading title="Newsletter" />
      <h1 className='headtext__assyrian'>
        Suscribite a nuestro Newsletter
      </h1>
      <p className='p__opensans'>Y no te pierdas las novedades!</p>
    </div>
    <div className='app__newsletter-input flex__center'>
      <input type="email" placeholder='Ingrese su email' />
      <button className='custom__button'>Suscribase</button>
    </div>
  </div>
);

export default Newsletter;
