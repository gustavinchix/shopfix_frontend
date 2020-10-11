import React from "react";
import ReactDOM from "react-dom";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar1 text-white">
			<a className="navbar-brand" href="#">
				ShopFix
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
				<ul className="navbar-nav">
					<li className="nav-item active">
						<a className="nav-link" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Login
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

ReactDOM.render(<Navbar />, document.querySelector("#app"));
