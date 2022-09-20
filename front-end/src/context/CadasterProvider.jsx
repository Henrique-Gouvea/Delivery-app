import React, { useState, useEffect } from 'react';
import CadasterContext from './CadasterContext';

function CadasterProvider({ children }) {
  const [nameLogin, setNameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');
  const [nameCadaster, setNameCadaster] = useState('');
  const [emailCadaster, setEmailCadaster] = useState('');
  const [passwordCadaster, setPasswordCadaster] = useState('');
  useEffect(() => {

  }, [nameLogin, passwordLogin]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const stateValue = {
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
  };

  return (
    <CadasterContext.Provider value={ stateValue }>
      {children}
    </CadasterContext.Provider>
  );
}

export default CadasterProvider;
