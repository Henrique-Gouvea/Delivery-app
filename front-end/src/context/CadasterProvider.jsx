import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import CadasterContext from './CadasterContext';
// import validationEmail from '../helpers/validationEmail';

function CadasterProvider({ children }) {
  const [nameLogin, setNameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [errorLogin, setErrorLogin] = useState('');

  const [nameCadaster, setNameCadaster] = useState('');
  const [emailCadaster, setEmailCadaster] = useState('');
  const [passwordCadaster, setPasswordCadaster] = useState('');
  const [errorCadaster, setErrorCadaster] = useState('');
  const [btnDisabledLogin, setBtnDisabledLogin] = useState(true);
  const [btnDisabledCadaster, setBtnDisabledCadaster] = useState(true);

  const [totalCart, setTotalCart] = useState('0,00');

  // const MIN_LENGTH_PASSWORD = 4;
  // const MAX_LENGTH_NAME = 12;

  // useEffect(() => {
  //   console.log(passwordCadaster.length);
  //   console.log(passwordCadaster.length > MIN_LENGTH_PASSWORD);
  //   if ((passwordCadaster.length > MIN_LENGTH_PASSWORD)
  //   && (validationEmail(emailCadaster)) && (nameCadaster.length < MAX_LENGTH_NAME)) {
  //     setBtnDisabledCadaster(false);
  //   } else setBtnDisabledCadaster(true);
  // }, [emailCadaster, passwordCadaster, nameCadaster, btnDisabledCadaster]);

  // useEffect(() => {
  //   console.log(passwordLogin);
  //   console.log(passwordLogin.length > MIN_LENGTH_PASSWORD);
  //   if ((passwordLogin.length > MIN_LENGTH_PASSWORD) && (validationEmail(nameLogin))) {
  //     setBtnDisabledLogin(false);
  //   } else {
  //     setBtnDisabledLogin(true);
  //   }
  // }, [nameLogin, passwordLogin]);

  const stateValue = useMemo(() => ({
    nameLogin,
    setNameLogin,
    passwordLogin,
    setPasswordLogin,
    nameCadaster,
    setNameCadaster,
    emailCadaster,
    setEmailCadaster,
    passwordCadaster,
    setPasswordCadaster,
    errorLogin,
    setErrorLogin,
    errorCadaster,
    setErrorCadaster,
    btnDisabledLogin,
    setBtnDisabledLogin,
    btnDisabledCadaster,
    setBtnDisabledCadaster,
    totalCart,
    setTotalCart,
  }), [
    nameLogin,
    passwordLogin,
    nameCadaster,
    emailCadaster,
    passwordCadaster,
    errorLogin,
    errorCadaster,
    btnDisabledLogin,
    btnDisabledCadaster,
    totalCart,
  ]);

  return (
    <CadasterContext.Provider value={ stateValue }>
      {children}
    </CadasterContext.Provider>
  );
}

CadasterProvider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default CadasterProvider;
