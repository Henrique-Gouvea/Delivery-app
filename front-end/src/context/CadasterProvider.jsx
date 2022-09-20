import React, { useState, useEffect, useMemo } from 'react';
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
  }), []);

  return (
    <CadasterContext.Provider value={ stateValue }>
      {children}
    </CadasterContext.Provider>
  );
}

export default CadasterProvider;
