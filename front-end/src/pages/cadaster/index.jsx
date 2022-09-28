import React, { useContext, useState, useEffect } from 'react';
import './style.css';

import { useNavigate } from 'react-router-dom';
import CadasterContext from '../../context/CadasterContext';
import { saveStorageUser } from '../../helpers/localStorage';
import validationEmail from '../../helpers/validationEmail';
import { apiRequestCadaster } from '../../services/api';

function Cadaster() {
  const [btnDisabledCadaster, setBtnDisabledCadaster] = useState(true);
  const MIN_LENGTH_PASSWORD = 5;
  const MIN_LENGTH_NAME = 11;
  const {
    nameCadaster,
    setNameCadaster,
    emailCadaster,
    setEmailCadaster,
    passwordCadaster,
    setPasswordCadaster,
    errorCadaster,
    setErrorCadaster,
    // btnDisabledCadaster,
    // setBtnDisabledCadaster,
  } = useContext(CadasterContext);
  const navigate = useNavigate();

  useEffect(() => {
    if ((passwordCadaster.length > MIN_LENGTH_PASSWORD)
    && (validationEmail(emailCadaster)) && (nameCadaster.length > MIN_LENGTH_NAME)) {
      setBtnDisabledCadaster(false);
    } else setBtnDisabledCadaster(true);
  }, [emailCadaster, passwordCadaster, nameCadaster]);

  const clearStateForm = () => {
    setErrorCadaster('');
    setNameCadaster('');
    setEmailCadaster('');
    setPasswordCadaster('');
  };

  const clickSubmitCadaster = (event) => {
    event.preventDefault();
    apiRequestCadaster({
      name: nameCadaster, password: passwordCadaster, email: emailCadaster })
      .then((e) => {
        if (e.role) {
          console.log(e);
          saveStorageUser(e);
          clearStateForm();
          navigate('/customer/products');
        } else setErrorCadaster(e.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const retorneLogin = () => {
    navigate('/login');
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Cadastro</h3>
          <div className="form-group mt-3">
            <p>Nome</p>
            <input
              type="text"
              className="form-control mt-1"
              name="name"
              placeholder="Seu nome"
              data-testid="common_register__input-name"
              onChange={ (ele) => setNameCadaster(
                ele.target.value,
              ) }
              value={ nameCadaster }
            />
          </div>
          <div className="form-group mt-3">
            <p>Email</p>
            <input
              type="email"
              className="form-control mt-1"
              name="login"
              placeholder="seu-email@site.com.br"
              data-testid="common_register__input-email"
              onChange={ (ele) => setEmailCadaster(
                ele.target.value,
              ) }
              value={ emailCadaster }
            />
          </div>
          <div className="form-group mt-3">
            <p>Password</p>
            <input
              type="password"
              className="form-control mt-1"
              name="senha"
              // type="text"
              placeholder="senha"
              data-testid="common_register__input-password"
              onChange={ (ele) => setPasswordCadaster(
                ele.target.value,
              ) }
              value={ passwordCadaster }
            />
          </div>
          <div className="d-grid gap-2 mt-5">
            <button
              type="submit"
              className="btn btn-success"
              data-testid="common_register__button-register"
              onClick={ clickSubmitCadaster }
              disabled={ btnDisabledCadaster }
            >
              CADASTRAR
            </button>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-outline-danger"
              onClick={ retorneLogin }
              // data-testid="common_login__button-register"
            >
              Retorna ao login
            </button>
          </div>
          <div>
            { errorCadaster
              ? (
                <p
                  className="alert"
                  data-testid="common_register__element-invalid_register"
                >
                  {errorCadaster}
                </p>
              )
              : <p /> }
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cadaster;
