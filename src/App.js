import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/inicio/inicio';
import Login from './pages/login/login';
import Sobre from './pages/sobre/sobre';
import Produtos from './pages/produtos/produtos';
import Contato from './pages/contato/contatos';
import UtensiliosProdutos from './pages/utens/utens';
import Cabecalho from './pages/cabegalho/cabegalho';
import Footer from './pages/footer/footer';

const App = () => {
  return (
    <Router>
      <Cabecalho />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/utensilios" element={<UtensiliosProdutos />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
