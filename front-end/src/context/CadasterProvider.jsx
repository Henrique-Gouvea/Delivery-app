import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import CadasterContext from './CadasterContext';

function CadasterProvider({ children }) {
  const [nameLogin, setNameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [nameCadaster, setNameCadaster] = useState('');
  const [emailCadaster, setEmailCadaster] = useState('');
  const [passwordCadaster, setPasswordCadaster] = useState('');
  useEffect(() => {

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
