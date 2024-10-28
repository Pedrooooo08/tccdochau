import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './cabegalho.scss';
import logo from '../image/Sabores da rua.png';

const Cabegalho = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
    if (window.innerWidth >= 768) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      <img src={logo} alt="Logo da Confeitaria" className="logo" />
      {isMobile ? (
        <>
          <button 
            className="menu-button" 
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            Menu
          </button>
          {isMobileMenuOpen && (
            <div className="mobile-menu">
              <Link to="/" className="home">Home</Link>
              <Link to="/Sobre" className="sobre">Sobre nós</Link>
              <Link to="/Produtos" className="produtos">Produtos</Link>
              <Link to="/Login" className="login">Login</Link>
              <Link to="/Contato" className="contato">Contato</Link>
            </div>
          )}
        </>
      ) : (
        <div className="nav">
          <Link to="/" className="home">Home</Link>
          <Link to="/Sobre" className="sobre">Sobre nós</Link>
          <Link to="/Produtos" className="produtos">Produtos</Link>
          <Link to="/Login" className="login">Login</Link>
          <Link to="/Contato" className="contato">Contato</Link>
        </div>
      )}
    </div>
  );
};

export default Cabegalho;
