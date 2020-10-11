import React from "react";
import ReactDOM from "react-dom";
import pijama1 from "../../img/pijama.jpg";
import carrito from "../../img/carrito-de-compras(1).png";
import "../../styles/cardshop.scss";

export function Card() {
	return (
		<div className="border border-dark border-1 card1 pl=3">
			<img src={pijama1} className="card-img-top photo" alt="..." />
			<div className="d-flex flex-wrap mt-1 d-flex justify-content-center">
				<a href="#" className=" buttonShop btn btn-outline-dark  btn-lg mb-1">
					{" "}
					More info
				</a>
				<button type="button" classNameName="buttonShop mb-1 " src={carrito}></button>
			</div>
		</div>
	);
}

ReactDOM.render(<Card />, document.querySelector("#app"));
