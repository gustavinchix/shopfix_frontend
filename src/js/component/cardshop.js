import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
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
		<div className="card-deck">
			{productos.map(item => (
				<div key={item.id} className="card">
					<img src={item.imagen} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">
							{item.titulo}
							<br></br>${item.precio}
						</h5>
						<button type="button" className="btn btn-outline-dark">
							Info
						</button>
					</div>
				</div>
			))}
		</div>
	);
}

ReactDOM.render(<Card />, document.querySelector("#app"));
