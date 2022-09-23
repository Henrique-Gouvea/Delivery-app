import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CadasterContext from '../../context/CadasterContext';
import { apiRequestLogin } from '../../services/api';
import validationEmail from '../../helpers/validationEmail';
import { saveStorageUser } from '../../helpers/localStorage';

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
    <div>
      <h1>Logotipo</h1>
      <div>
        <form>
          <div>
            <p>Login</p>
            <input
              name="login"
              type="email"
              placeholder="email@tryber.com.br"
              data-testid="common_login__input-email"
              onChange={ (ele) => setNameLogin(
                ele.target.value,
              ) }
              value={ nameLogin }
            />
            <p>Senha</p>
            <input
              name="senha"
              type="text"
              placeholder="senha"
              data-testid="common_login__input-password"
              onChange={ (ele) => setPasswordLogin(
                ele.target.value,
              ) }
              value={ passwordLogin }
            />

          </div>
          <div>
            <button
              type="submit"
              data-testid="common_login__button-login"
              disabled={ btnDisabledLogin }
              onClick={ clickSubmitLogin }
            >
              LOGIN
            </button>
            <button
              type="submit"
              onClick={ noAccountBtn }
              data-testid="common_login__button-register"
            >
              Ainda não tenho conta
            </button>
          </div>
          { errorLogin
            ? <p data-testid="common_login__element-invalid-email">{errorLogin}</p>
            : <p /> }
        </form>
      </div>
    </div>
  );
}

export default Login;
