import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper app__bg section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Persigue el nuevo sabor" />
      <h1 className='app__header-h1'>La clave de la buena mesa</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita illum numquam sequi exercitationem omnis nobis quidem velit ut cumque voluptatum.</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt='header img'/>
    </div>
  </div>
);

export default Header;
