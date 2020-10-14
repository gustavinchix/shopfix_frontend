import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../../styles/cardshop.scss";

export function Card() {
	const [productos, setProductos] = useState([]);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		obtenerDatos();
	}, []);
	const obtenerDatos = async () => {
		const data = await fetch("https://3000-ac39cd9f-8e82-4509-aefa-74d1bf2ff4a5.ws-us02.gitpod.io/productos");
		const products = await data.json();
		setProductos(products);
	};

	const addtoCart = item => {
		setCart([...cart, { ...item }]);
	};

	const removefromCart = itemtoRemove => {
		setCart(cart.filter(item => item !== itemtoRemove));
	};

	const totalSum = () => {
		return cart.reduce((sum, { precio }) => sum + precio, 0);
	};

	return (
		<Fragment>
			<h1>Productos</h1>
			<div className="container">
				<div className="row">
					{productos.map(item => (
						<div key={item.id} className="col-md-3">
							<div className="card">
								<div className="card-block">
									<img src={item.imagen} className="tamano card-img-top" alt="..." />
									<div className="card-title">
										<h4>
											{item.titulo}
											<br></br>${item.precio}
										</h4>
									</div>
									<button
										onClick={() => addtoCart(item)}
										type="button"
										className="btn btn-outline-dark">
										Cart
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div>
				<h1>Cart ({cart.length})</h1>
				<div className="container">
					<div className="row">
						{cart.map(item => (
							<div key={item.id} className="col-md-3">
								<div className="card">
									<div className="card-block">
										<img src={item.imagen} className="tamano card-img-top" alt="..." />
										<div className="card-title">
											<h4>
												{item.titulo}
												<br></br>${item.precio}
											</h4>
										</div>
										<button
											onClick={() => removefromCart(item)}
											type="button"
											className="btn btn-outline-danger">
											Remove
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<h1>Precio Total: ${totalSum()}</h1>
			</div>
		</Fragment>
	);
}

ReactDOM.render(<Card />, document.querySelector("#app"));
