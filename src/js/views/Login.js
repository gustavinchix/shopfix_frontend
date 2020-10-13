import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Logo from "../../img/SHOPFIX.jpg";
import "../../styles/index.scss";

export const Login = () => {
	//const history = useHistory();
	const [email, setEmail] = useState("");
	const [password_hash, setPassword_hash] = useState("");
	const { store, actions } = useContext(Context);

	const signIn = e => {
		e.preventDefault();
		// {store.signInwithEmailAndPass}
	};

	const register = e => {
		e.preventDefault();
	};
	//const signUp = e => {
	//    e.preventDefault();
	// {store.signInwithEmailAndPass}
	//}

	return (
		<div className="login">
			<Link to="/">
				<img className="login__logo" src={Logo} />
			</Link>

			<div className="login__container">
				<h1>Ingresar</h1>

				<form>
					<h5>E-mail</h5>
					<input type="text" value={email} onChange={e => setEmail(e.target.value)} />

					<h5>Contraseña</h5>
					<input type="password" value={password_hash} onChange={e => setPassword_hash(e.target.value)} />

					<button type="submit" onClick={signIn} className="login__signInButton">
						Ingresar
					</button>
				</form>

				<p>
					By signing-in you agree to the SHOPFIX Conditions of Use and Sale. Please see our Privacy Notice and
					our Cookies Notice and our Interest-Based Ads Notice.
				</p>

				<button onClick={register} className="login__registerButton">
					Crear cuenta Shopfix
				</button>
			</div>
		</div>
	);
};
