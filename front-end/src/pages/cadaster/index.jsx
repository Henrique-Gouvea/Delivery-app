import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import CadasterContext from '../../context/CadasterContext';

function Cadaster() {
  return (
    <div>
      <h1>Cadastro</h1>
      <div>
        <form>
          <div>
            <p>Nome</p>
            <input
              name="name"
              type="text"
              placeholder="Nome"
              data-testid="common_register__input-name"
            />
            <p>Email</p>
            <input
              name="login"
              type="text"
              placeholder="email@tryber.com.br"
              data-testid="common_register__input-email"
            />
            <p>Senha</p>
            <input
              name="senha"
              type="text"
              placeholder="senha"
              data-testid="common_register__input-password"
            />

          </div>
          <div>
            <button
              type="submit"
              data-testid="common_register__button-register"
            >
              CADASTRAR
            </button>
          </div>
          <p data-testid="common_register__element-invalid_register">Mensagem de erro</p>
        </form>
      </div>
    </div>
  );
}

export default Cadaster;
