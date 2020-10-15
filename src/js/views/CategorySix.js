import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../../styles/cardshop.scss";

export const CategorySix = () => {
	const [productos, setProductos] = useState([]);
	const [categoria_id, setCategoria_id] = useState(""); // id de la categoria del producto**
	const [cart, setCart] = useState([]);
	const [search, setSearch] = useState("");
	const baseAPIUrl = "https://3000-d1531b8c-11c1-4855-999a-eb2feca6dea5.ws-us02.gitpod.io";

	useEffect(() => {
		obtenerDatos();
	}, []);
	const obtenerDatos = async () => {
		const data = await fetch(`${baseAPIUrl}/productos/categoria/7`);
		//const data = await fetch("https://3000-e2cdfb92-1e98-40e4-b573-9dfae6e651c6.ws-us02.gitpod.io/productos"); esta url me funcionaba a mi porque la otra nop
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

	const filterProducts = productos.filter(item => {
		return item.titulo.toLowerCase().includes(search.toLowerCase());
	});

	return (
		<Fragment>
			<input type="text" placeholder="Buscar Producto" onChange={e => setSearch(e.target.value)} />
			<h1>Productos</h1>
			<div className="container">
				<div className="row">
					{filterProducts.map(item => (
						<div key={item.id} className="col-md-3">
							<div className="card">
								<div className="card-block">
									<img src={item.imagen} className="tamano card-img-top" alt="..." />
									<div className="card-title">
										<h4>
											{item.titulo}
											<br />${item.precio}
										</h4>
									</div>
									<button onClick={() => addtoCart(item)} type="button" className="btn ">
										<i className="fas fa-shopping-cart" />
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
												<br />${item.precio}
											</h4>
										</div>
										<button onClick={() => removefromCart(item)} type="button" className="btn ">
											<i className="fas fa-times" />
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
};
