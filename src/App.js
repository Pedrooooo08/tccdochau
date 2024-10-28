
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/inicio/inicio';
import Login from './pages/login/login';
import Sobre from './pages/sobre/sobre';
import Produtos from './pages/produtos/produtos';
import Cabegalho from './pages/cabegalho/cabegalho';
import Contato from './pages/contato/contatos';
import Footer from './pages/footer/footer';





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/cabegalho" element={<Cabegalho />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/footer" element={<  Footer />} />
      </Routes>
    </Router>
  );
};

export default App;


