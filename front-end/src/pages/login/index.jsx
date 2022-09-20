import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import CadasterContext from '../../context/CadasterContext';

function Login() {
  const navigate = useNavigate();

  const noAccountBtn = () => {
    navigate('/register');
  };

  return (
    <div>
      <h1>Logotipo</h1>
      <div>
        <form>
          <div>
            <p>Login</p>
            <input
              name="login"
              type="text"
              placeholder="email@tryber.com.br"
            />
            <p>Senha</p>
            <input
              name="senha"
              type="text"
              placeholder="senha"
            />

          </div>
          <div>
            <button
              type="submit"
            >
              LOGIN
            </button>
            <button
              type="submit"
              onClick={ noAccountBtn }
            >
              Ainda não tenho conta
            </button>
          </div>
          <p>Mensagem de erro</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
