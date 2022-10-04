import React, { useState, useEffect } from 'react';
import './style.css';

import Header from '../../../components/header';
import TableManage from '../../../components/tableManage';
import { apiRequestUserGetAll, apiRequestCadasterWithToken } from '../../../services/api';
import { getStorageUser } from '../../../helpers/localStorage';

function Manage() {
  const [newUser, setNewuser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'customer',
  });
  const [inputValid, setInputValid] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const [allUsers, setallUsers] = useState([]);

  const handleChange = ({ target: { name, value } }) => {
    setNewuser((prev) => ({ ...prev, [name]: value }));
  };

  const users = async () => {
    const result = await apiRequestUserGetAll();
    if (!result) return [];
    const noAdmin = result.filter((elem) => elem.role !== 'administrator');
    setallUsers(noAdmin);
  };

  useEffect(() => {
    users();
  }, []);

  useEffect(() => {

  }, [allUsers, userExist]);

  useEffect(() => {
    const { email, password, name } = newUser;
    const emailRegex = /\S+@\S+\.\S+/;
    const passwordMinLength = 6;
    const nameMinLength = 12;

    if (emailRegex.test(email) && password.length >= passwordMinLength
    && name.length >= nameMinLength) {
      setInputValid(true);
    }

    if (!emailRegex.test(email) || password.length < passwordMinLength
    || name.length < nameMinLength) {
      setInputValid(false);
    }
  }, [newUser]);

  const handleClick = async () => {
    setNewuser({
      name: '',
      email: '',
      password: '',
    });

    const emailUsers = allUsers.map((ele) => ele.email);

    if (emailUsers.includes(newUser.email)) {
      setUserExist(true); // elemento para usuário já existente
    }

    const resultado = await apiRequestUserGetAll();
    const usersDB = resultado.filter((elem) => elem.role !== 'administrator');

    if (emailUsers.includes(newUser.email)) {
      setallUsers([...usersDB]); // não adiciona usuario já existente
    } else {
      setallUsers([...usersDB, newUser]);
    }

    const { token, role } = getStorageUser();
    if (!token) return false;

    apiRequestCadasterWithToken({ newUser, role }, token)
      .then((result) => result)
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Header />
      <div className="princ">
        <h1 className="cadAdm">Cadastrar novo usuário</h1>
        {
          userExist && (
            <p
              data-testid="admin_manage__element-invalid-register"
            >
              Usuário já cadastrado!
            </p>
          )
        }
        {/* <form> */}
        <label
          htmlFor="name"
        >
          Nome:
          <input
            id="name"
            name="name"
            className="label01"
            value={ newUser.name }
            onChange={ ({ target }) => handleChange({ target }) }
            data-testid="admin_manage__input-name"
          />
        </label>
        <label
          htmlFor="email"
        >
          Email:
          <input
            id="email"
            name="email"
            className="label01"
            value={ newUser.email }
            onChange={ ({ target }) => handleChange({ target }) }
            data-testid="admin_manage__input-email"
          />
        </label>
        <label
          htmlFor="password"
        >
          Password:
          <input
            id="password"
            name="password"
            className="label01"
            value={ newUser.password }
            onChange={ ({ target }) => handleChange({ target }) }
            data-testid="admin_manage__input-password"
          />
        </label>

        <label
          htmlFor="role"
        >
          Tipo
          <select
            className="label01"
            onChange={ ({ target }) => handleChange({ target }) }
            name="role"
            data-testid="admin_manage__select-role"
          >
            <option value="customer">
              Cliente
            </option>
            <option value="seller">
              Vendedor
            </option>
          </select>
        </label>
        <button
          disabled={ !inputValid }
          type="button"
          className="admCadastrar"
          data-testid="admin_manage__button-register"
          onClick={ () => handleClick() }
        >
          CADASTRAR
        </button>
        {/* </form> */}
        <TableManage users={ allUsers } />
      </div>
    </>
  );
}

export default Manage;
