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
            />
            <p>Email</p>
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
              CADASTRAR
            </button>
          </div>
          <p>Mensagem de erro</p>
        </form>
      </div>
    </div>
  );
}

export default Cadaster;
