import React from 'react';
import './contatos.scss';
import Cabecalho from '../cabegalho/cabegalho';
import logo from '../image/Sabores da rua.png';
import x from '../image/x.png';
import wats from '../image/wetz.png';
import face from '../image/face.png';
import Footer from '../footer/footer';




const Contato = () => {
  return (
    <>
     <Cabecalho />
<div className='contato-home'>


  <div className='logo1'>
    <img src={logo} alt="Logo da Confeitaria" />
  </div>

  <div className='contato-links'>
    <div className='face'>
      <a href="https://facebook.com/confeitaria" target="_blank" rel="noopener noreferrer" aria-label="Facebook da Confeitaria">
        <img src={face} alt="Facebook" />
        Facebook
      </a>
    </div>

    <div className='x'>
      <a href="https://twitter.com/confeitaria" target="_blank" rel="noopener noreferrer" aria-label="Twitter da Confeitaria">
        <img src={x} alt="Twitter" />
        <p>twitter</p>
      </a>
    </div>

    <div className='wats'>
      <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Confeitaria">
        <img className='whats' src={wats} alt="WhatsApp" />
        WhatsApp
      </a>
    </div>
  </div>
</div>
<Footer />
      
 
    </>
  );
};

export default Contato;