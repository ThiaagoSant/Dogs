import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../Forms/Input';
import Button from '../../Forms/Button';

const LoginForm = () => {
  const [username, setUsername] = React.useState(''),
    [password, setPassword] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fetchProps = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      },
      resp = await fetch(
        'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
        fetchProps
      ),
      json = await resp.json();

    return json;
  };

  return (
    <section>
      <h1>Login Form</h1>
      <form action='#' onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' />
        <Input label='Senha' type='password' name='password' />
        <Button>Entrar</Button>
      </form>
      <Link to='/login/criar'>Cadastros</Link>
    </section>
  );
};

export default LoginForm;
