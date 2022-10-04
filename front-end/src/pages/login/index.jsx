import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

import CadasterContext from '../../context/CadasterContext';
import { apiRequestLogin } from '../../services/api';
import validationEmail from '../../helpers/validationEmail';
import { saveStorageUser, getStorageUser } from '../../helpers/localStorage';

function Login() {
  const [btnDisabledLogin, setBtnDisabledLogin] = useState(true);
  const MIN_LENGTH_PASSWORD = 5;
  const {
    nameLogin,
    setNameLogin,
    passwordLogin,
    setPasswordLogin,
    errorLogin,
    setErrorLogin, // teste
  } = useContext(CadasterContext);
  const navigate = useNavigate();

  useEffect(() => {
    if ((passwordLogin.length > MIN_LENGTH_PASSWORD) && (validationEmail(nameLogin))) {
      setBtnDisabledLogin(false);
    } else {
      setBtnDisabledLogin(true);
    }
  }, [nameLogin, passwordLogin]);

  const noAccountBtn = () => {
    navigate('/register');
  };

  const clearStateForm = () => {
    setErrorLogin('');
    setNameLogin('');
    setPasswordLogin('');
  };

  const logicalNavigate = (user) => {
    if (user.role === 'customer') {
      clearStateForm();
      navigate('/customer/products');
    } else if (user.role === 'seller') {
      clearStateForm();
      navigate('/seller/orders');
    } else if (user.role === 'administrator') {
      clearStateForm();
      navigate('/admin/manage');
    } else setErrorLogin(user.message);
  };

  useEffect(() => {
    const user = getStorageUser();
    if (user && user.token) logicalNavigate(user);
  }, []);

  const clickSubmitLogin = async (event) => {
    event.preventDefault();
    apiRequestLogin({ email: nameLogin, password: passwordLogin })
      .then((e) => {
        if (e.role) saveStorageUser(e);
        logicalNavigate(e);
      })
      .catch((err) => {
        console.log(err);
        setErrorLogin(err.message);
      });
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <p>Email</p>
            <input
              type="email"
              className="form-control mt-1"
              name="login"
              placeholder="email@tryber.com.br"
              data-testid="common_login__input-email"
              onChange={ (ele) => setNameLogin(
                ele.target.value,
              ) }
              value={ nameLogin }
            />
          </div>
          <div className="form-group mt-4">
            <p>Senha</p>
            <input
              type="password"
              className="form-control mt-1"
              name="senha"
              placeholder="Digite a senha"
              data-testid="common_login__input-password"
              onChange={ (ele) => setPasswordLogin(
                ele.target.value,
              ) }
              value={ passwordLogin }
            />
          </div>
          <div className="d-grid gap-2 mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              data-testid="common_login__button-login"
              disabled={ btnDisabledLogin }
              onClick={ clickSubmitLogin }
            >
              LOGIN
            </button>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-outline-danger"
              onClick={ noAccountBtn }
              data-testid="common_login__button-register"
            >
              Ainda não tenho conta
            </button>
          </div>
          <div>
            { errorLogin
              ? (
                <p
                  className="alert"
                  data-testid="common_login__element-invalid-email"
                >
                  {errorLogin}
                </p>
              )
              : <p /> }
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
