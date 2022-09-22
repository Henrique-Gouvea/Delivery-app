import React from 'react';

function cadasterUserForm() {
  return (
    <div>
      <form>
        <div>
          <p>Nome</p>
          <input
            name="name"
            type="text"
            placeholder="Nome"
            data-testid="admin_manage__input-name"
            // onChange={ (ele) => setNameCadasterUserForm(
            //   ele.target.value,
            // ) }
            // value={ nameCadasterUserForm }
          />
          <p>Email</p>
          <input
            name="login"
            type="email"
            placeholder="email@tryber.com.br"
            data-testid="admin_manage__input-email"
            // onChange={ (ele) => setEmailCadaster(
            //   ele.target.value,
            // ) }
            // value={ emailCadaster }
          />
          <p>Senha</p>
          <input
            name="senha"
            type="text"
            placeholder="senha"
            data-testid="admin_manage__input-password"
            // onChange={ (ele) => setPasswordCadaster(
            //   ele.target.value,
            // ) }
            // value={ passwordCadaster }
          />
          <select
            data-testid="admin_manage__select-role"
            name="select"
          >
            <option value="vendedor">Vendedor</option>
            <option value="cliente" selected>Cliente</option>
            <option value="administrador">Administrador</option>
          </select>

        </div>
        <div>
          <button
            type="submit"
            data-testid="admin_manage__button-register"
            // onClick={ clickSubmitCadaster }
          >
            CADASTRAR
          </button>
        </div>
      </form>
    </div>
  );
}
export default cadasterUserForm;
