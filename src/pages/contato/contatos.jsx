import React from 'react';
import './contatos.scss';
import Cabecalho from '../cabegalho/cabegalho';
import logo from '../image/Sabores da rua.png';
import x from '../image/x.png';
import wats from '../image/wetz.png';
import face from '../image/face.png';




const Contato = () => {
  return (
    <>
      <Cabecalho />
      <div className='contato-home'>
    
       <h1 className='titulo'>contatos</h1>
        
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
              Twitter
            </a>
          </div>

          <div className='wats'>
          <img className='whats' src={wats} alt="WhatsApp" />
            <p>WhatsApp</p>
       
          </div>
        </div>
      </div>
 
    </>
  );
};

export default Contato;