import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import pijama1 from "../../img/pijama.jpg";
import carrito from "../../img/carrito-de-compras.png";
import "../../styles/cardshop.scss";

export function Card() {
	return (
		<Fragment>
			<div className="card card1">
				<img src={pijama1} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title"> Pijama </h5>
					<p className="card-text">
						Lorem ipsum dolor adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua.
					</p>
					<a href="#" className="buttonshop">
						Click for more information
					</a>
					<button type="button" className="buttonShop" src={carrito}>
						{" "}
					</button>
				</div>
			</div>
		</Fragment>
	);
}

ReactDOM.render(<Card />, document.querySelector("#app"));
