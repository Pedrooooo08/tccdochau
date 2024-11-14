import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password, isAdmin });
    
    if (isAdmin) {
      navigate('/ADM');
    } else {
      alert('Acesso de usuário comum');
    }
  };

  const handleForgotPassword = () => {
    alert('Instruções para recuperação de senha foram enviadas para seu e-mail!');
  };

  return (

      <div className="login-container">
        <h1>{isAdmin ? 'Login Admin' : 'Login'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" className="show-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? 'Esconder' : 'Mostrar'} Senha
            </button>
          </div>
          <button type="submit">Entrar</button>
          <button type="button" className="forgot-password" onClick={handleForgotPassword}>
            Esqueci a Senha
          </button>
          <button type="button" className="admin-toggle" onClick={() => setIsAdmin(!isAdmin)}>
            {isAdmin ? 'Login de Usuário' : 'Acesso Admin'}
          </button>
        </form>
      </div>

  );
};

export default Login;