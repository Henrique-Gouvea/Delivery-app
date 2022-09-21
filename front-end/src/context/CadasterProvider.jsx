import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import CadasterContext from './CadasterContext';
import validationEmail from '../helpers/validationEmail';

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

  const MIN_LENGTH_PASSWORD = 5;
  const MAX_LENGTH_NAME = 12;

  useEffect(() => {

  }, [emailCadaster, passwordCadaster, nameCadaster]);

  useEffect(() => {
    if ((passwordCadaster.length > MIN_LENGTH_PASSWORD)
    && validationEmail(emailCadaster) && nameCadaster < MAX_LENGTH_NAME) {
      setBtnDisabledLogin(false);
    } else setBtnDisabledLogin(true);
  }, [emailCadaster, passwordCadaster, nameCadaster]);

  useEffect(() => {
    if ((passwordLogin.length > MIN_LENGTH_PASSWORD) && validationEmail(nameLogin)) {
      setBtnDisabledLogin(false);
    } else setBtnDisabledLogin(true);
  }, [nameLogin, passwordLogin]);

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
  }), [nameLogin, passwordLogin, nameCadaster, emailCadaster, passwordCadaster]);

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
