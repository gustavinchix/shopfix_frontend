import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import pijama1 from "../../img/pijama.jpg";
import carrito from "../../img/carrito-de-compras(1).png";
import "../../styles/cardshop.scss";

export function Card() {
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		obtenerDatos();
	}, []);
	const obtenerDatos = async () => {
		const data = await fetch("https://3000-ac39cd9f-8e82-4509-aefa-74d1bf2ff4a5.ws-us02.gitpod.io/productos");
		const products = await data.json();
		setProductos(products);
	};

	return (
		<div>
			{productos.map(producto => (
				<div key={producto.id} className="border border-dark border-1 card1 pl=3 m-2 d-inline-flex">
					<img src={producto.imagen} className="card-img-top photo" alt={producto.titulo} />
					<p>{producto.precio}</p>
					<div className="mt-1 d-flex flex-wrap justify-content-center">
						<a href="#" className=" buttonShop btn btn-outline-dark btn-sm mb-1">
							{" "}
							More info
						</a>
						<button type="button" className="buttonShop mb-1 " src={carrito}></button>
					</div>
				</div>
			))}
		</div>
	);
}

ReactDOM.render(<Card />, document.querySelector("#app"));
