import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants'

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Palabra del Chef"/>
      <h1 className='headtext__assyrian'>En lo que creemos</h1>
      
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="cita" />
          <p className='p__opensans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi dolore tempora aperiam velit beatae ea porro nihil?</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kemal Ataturk</p>
          <p className='p__opensans'>Chef & Fundador</p>
          <img src={images.sign} alt="firma" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;
