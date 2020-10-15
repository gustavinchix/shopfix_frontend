import React from "react";
import { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import logo from "../../img/SHOPFIX.png";
import { Modal, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

/*Esto es del modal del carrito*/
const useStyles = makeStyles(theme => ({
	modal: {
		position: "absolute",
		width: 400,
		backgroundColor: "white",
		border: "2px solid white",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3, 4),
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)"
	},
	textfield: {
		width: "100%"
	}
}));

export const Navbar = () => {
	/*modal carrito*/
	const styles = useStyles();
	/*modal carrito*/
	const [modal, setModal] = useState(false);
	/*modal carrito*/
	const abrirCerrarModal = () => {
		setModal(!modal);
	};
	/*modal carrito*/
	const body = (
		<div className={styles.modal}>
			<div align="center">
				<h2>Carrito de Compras</h2>
			</div>
			<TextField label="Nombre y Apellido" className={styles.textfield}></TextField>
            <TextField label="Direccion" className={styles.textfield}></TextField>
            <TextField label="Correo" className={styles.textfield}></TextField>

			<Button onClick={() => abrirCerrarModal()} type="button">
				Cerrar
			</Button>
		</div>
	);

	return (
		// <nav className="navbar navbar-light bg-light mb-3">
		// 	<Link to="/">
		// 		<span className="navbar-brand mb-0 h1">React Boilerplate</span>
		// 	</Link>

		// 	<div className="ml-auto">
		// 		<Link to="/Login">
		// 			<button className="btn btn-primary">Login</button>
		// 		</Link>

		// 	</div>
		// </nav>

		<div className="navbar1">
			<Modal open={modal} onClose={abrirCerrarModal}>
				{body}
			</Modal>

			<nav className="navbar navbar-expand-lg  mb-4">
				<a className="navbar-brand" />
				<Link to="/">
					<img className="d-block img-fluid logo" src={logo} alt="First slide" />
				</Link>
				{/* <img className="d-block img-fluid logo" src={logo} alt="First slide" /> */}
				<div className="collapse navbar-collapse " id="navbarSupportedContent">
					<form className="form-inline ml-auto">
						<div className="md-form my-0">
							<input className="form-control" type="text" placeholder="Search" aria-label="Search" />
							<Link to="/search">
								<button className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">
									<i className="fas fa-search"></i>
								</button>
							</Link>
						</div>
						<a className="nav-link" onClick={() => abrirCerrarModal()} type="button" href="#">
							<i className="fas fa-shopping-cart cart" /> <span className="sr-only" />
						</a>
						<Link to="/Login">
							<button className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">
								<i className="fas fa-user"></i>
							</button>
						</Link>
						{/* <button href="#!" className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">
							Login
						</button> */}
					</form>
				</div>
			</nav>
		</div>
	);
};

// ReactDOM.render(<Navbar />, document.querySelector("#app"));
