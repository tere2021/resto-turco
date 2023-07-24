import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contacto"/>
      <h1 className='headtext__assyrian' style={{ marginBottom: '3rem' }}>Encuentranos</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Av. Florida</p>
        <p className='p__assyrian' style={{ color: '#DCCA87', margin: '2rem 0'}}>Abierto</p>
        <p className='p__opensans'>Lunes - Viernes: 22:00pm - 02:00 am</p>
        <p className='p__opensans'>Sábado - Domingo: 22:00pm - 04:00 am</p>
      </div>
      <button className='custom__button' style={{marginTop: '2rem'}}>Visitanos!</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.findus} alt="Buscanos" />
    </div>
  </div>
);

export default FindUs;
