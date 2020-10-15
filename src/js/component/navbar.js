import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import logo from "../../img/SHOPFIX.png";

export const Navbar = () => {
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
						<a className="nav-link" href="#">
							<i className="fas fa-shopping-cart" /> <span className="sr-only" />
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
