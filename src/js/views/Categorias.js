import React, { useState } from "react";
import shortid from "shortid";
import { Link } from "react-router-dom";

export const Categorias = () => {
	//function Categorias() {
	// Creo los estados
	const [categoria, setCategoria] = useState("");
	const [categorias, setCategorias] = useState([]);
	const [modoEdicion, setModoEdicion] = useState(false);
	const [id, setId] = React.useState("");

	const agregarCategoria = e => {
		e.preventDefault();
		if (!categoria.trim()) {
			console.log("Elemento vacío");
			return;
		}
		console.log(categoria);

		setCategorias([...categorias, { id: shortid.generate(), nombreCategoria: categoria }]);

		setCategoria("");
	};

	const eliminarCategoria = id => {
		//console.log(id);
		const arrayFiltrado = categorias.filter(item => item.id !== id);
		setCategorias(arrayFiltrado);
	};

	const editar = item => {
		console.log(item);
		setModoEdicion(true);
		setCategoria(item.nombreCategoria);
		setId(item.id);
	};

	const editarCategoria = e => {
		e.preventDefault();
		if (!categoria.trim()) {
			console.log("Elemento Vacío");
			//setError('Escriba algo por favor...')
			return;
		}

		const arrayEditado = categorias.map(item => (item.id === id ? { id: id, nombreCategoria: categoria } : item));

		setCategorias(arrayEditado);
		setModoEdicion(false);
		setCategoria("");
		setId("");
		//setError(null)
	};

	return (
		<div>
			<div className="container mt-5">
				<h1 className="text-center">Edicion de Categorias</h1>
				<hr />
				<div className="row">
					<div className="col-12">
						<h4 className="text-center">Lista de Categorias</h4>
						<ul className="list-group">
							{categorias.map(item => (
								<li className="list-group-item" key={item.id}>
									<span className="lead">{item.nombreCategoria}</span>
									<button
										className="btn btn-sm btn-danger float-right mx-2"
										onClick={() => eliminarCategoria(item.id)}>
										Eliminar
									</button>

									<button className="btn btn-sm btn-warning float-right" onClick={() => editar(item)}>
										Editar
									</button>
								</li>
							))}
							<li className="list-group-item">
								<span className="lead">Nombre de la categoria</span>
								<button className="btn btn-sm btn-danger float-right mx-2">Eliminar</button>
								<button className="btn btn-sm btn-warning float-right">Editar</button>
							</li>
						</ul>
					</div>

					<div className="col-12">
						<h4 className="text-center">{modoEdicion ? "Editar Categoria" : "Agregar Categoria"}</h4>
						<form onSubmit={modoEdicion ? editarCategoria : agregarCategoria}>
							<input
								type="text"
								className="form-control mb-2"
								placeholder="Ingrese Categoria"
								onChange={e => setCategoria(e.target.value)}
								value={categoria}
							/>
							{modoEdicion ? (
								<button className="btn btn-warning btn-block" type="submit">
									Editar
								</button>
							) : (
								<button className="btn btn-dark btn-block" type="submit">
									Agregar
								</button>
							)}
						</form>
					</div>
				</div>
				<br />
				<br />
				<br />
			</div>
			<div className="row">
				<div className="col-4" />
				<Link to="/edicion">
					<div className="text-left mb-3">
						<button type="button" className="btn btn-dark btn-lg">
							Regresar
						</button>
					</div>
				</Link>
				<div className="col-4">
					<Link to="/">
						<div className="text-right mb-3">
							<button type="button" className="btn btn-info btn-lg">
								Salir
							</button>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

//export default Categorias;
