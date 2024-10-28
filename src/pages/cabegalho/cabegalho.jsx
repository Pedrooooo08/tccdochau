import React from 'react';
import { Link } from 'react-router-dom';
import './cabegalho.scss';
import logo from '../image/Sabores da rua.png';



const Cabecalho = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo da Confeitaria" className="logo" />
      <div className="nav">

      <div>
          <Link to="/" className="home">Home</Link>
        </div>

        <div>
          <Link to="/Sobre" className="sobre">Sobre nós</Link>
        </div>
        <div>
          <Link to="/Produtos" className="produtos">Produtos</Link>
        </div>
       
        <div>
          <Link to="/Login" className="login">Login</Link>
        </div>
        <div className="contato">
          <Link to="/Contato">Contato</Link>
        </div>

      </div>
    </div>
  );
};

export default Cabecalho;