import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contactanos</h1>
        <p className="p__opensans">Florida 56, Buenos Aires, ARGENTINA</p>
        <p className="p__opensans">+54 112-344-1230</p>
        <p className="p__opensans">+54 112-555-1230</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.Lezzetliyemek} alt="footer_logo" />
        <p className="p__opensans">&quot;La mejor manera de encontrarte a ti mismo es perderte al servicio de los demás..&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} alt="spoon" />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Horario de trabajo</h1>
        <p className="p__opensans">Lunes - Viernes:</p>
        <p className="p__opensans">20:00 - 23:00 pm</p>
        <p className="p__opensans">Sabado - domingo:</p>
        <p className="p__opensans">20:00 pm - 3:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2021 Lezzetli yemek. Todos los derechos reservados. </p>

  </div></div>
);

export default Footer;
