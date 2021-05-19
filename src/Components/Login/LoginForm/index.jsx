import React from 'react';
import { Link } from 'react-router-dom';

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
				<input
					value={username}
					type='text'
					onChange={({ target }) => setUsername(target.value)}
				/>

				<input
					value={password}
					type='text'
					onChange={({ target }) => setPassword(target.value)}
				/>
				<button>Entrar</button>
			</form>
			<Link to='/login/criar'>Cadastros</Link>
		</section>
	);
};

export default LoginForm;
