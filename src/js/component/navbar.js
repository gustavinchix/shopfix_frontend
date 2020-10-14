import React from "react";
import ReactDOM from "react-dom";
import "../../styles/navbar.scss";
import logo from "../../img/SHOPFIX.JPG";

export const Navbar = () => {
	return (
		<div className="navbar1">
			<nav className="navbar navbar-expand-lg  mb-4">
				<a className="navbar-brand" href="#">
					ShopFix
				</a>
                <img className="d-block img-fluid w-100" src={logo} alt="First slide" />
				<div className="collapse navbar-collapse " id="navbarSupportedContent">
					<form className="form-inline ml-auto">
						<div className="md-form my-0">
							<input className="form-control" type="text" placeholder="Search" aria-label="Search" />
						</div>
						<a className="nav-link" href="#">
							Card <span className="sr-only"></span>
						</a>
						<button href="#!" className="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">
							Login
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
};

ReactDOM.render(<Navbar />, document.querySelector("#app"));
