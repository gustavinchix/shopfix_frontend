import React from "react";
import { Link } from "react-router-dom";

//import { Home } from "./views/home";
//import { Categorias } from "./views/Categorias";
// import Productos from

export const Edicion = () => {
	return (
		<div className="edicion">
			<div className="container mt-5">
				<h1 className="text-center">Edicion de Categorías y Productos</h1>
				<br />
				<br />
				<br />
				<div className="row">
					<div className="col-12">
						<Link to="/categoriasadmin">
							<button type="button" className="btn btn-info btn-lg btn-block">
								Categorías
							</button>
						</Link>
						<br />
						<br />

						<Link to="/productosadmin">
							<button type="button" className="btn btn-info btn-lg btn-block">
								Productos
							</button>
						</Link>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />

				<div className="row">
					<div className="col-8" />
					<div className="col-4">
						<Link to="/">
							<div className="text-right mb-3">
								<button type="button" className="btn btn-dark btn-lg btn-block">
									Salir
								</button>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

//export default Edicion;
