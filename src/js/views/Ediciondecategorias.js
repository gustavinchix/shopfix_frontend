import React, { useState } from "react";
//import { generate } from "shortid";
import shortid from "shortid";

function Ediciondecategorias() {
	// Creo los estados
	const [categoria, setCategoria] = useState("");
	const [categorias, setCategorias] = useState([]);
	const [modoEdicion, setModoEdicion] = useState(false);
	const [id, setId] = useState("");
	const [error, setError] = useState(null);

	const agregarCategoria = e => {
		e.preventDefault();
		if (!categoria.trim()) {
			console.log("Elemento vacío");
			setError("Escriba algo por favor...");
			return;
		}
		console.log(categoria);

		setCategorias([...categorias, { id: shortid.generate(), nombreCategoria: categoria }]);

		setCategoria("");
		setError(null);
	};

	const eliminarCategoria = id => {
		const arrayFiltrado = categoria.filter(item => item.id !== id);
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
			setError("Escriba algo por favor...");
			return;
		}

		const arrayEditado = categorias.map(item => (item.id === id ? { id: id, nombreCategoria: categoria } : item));

		setCategorias(arrayEditado);
		setModoEdicion(false);
		setCategoria("");
		setId("");
		setError(null);
	};

	return (
		<div className="container mt-5">
			<h1 className="text-center">Edición de categorias</h1>
			<hr />
			<div className="row">
				<div className="col-8">
					<h4 className="text-center">Lista de categorias</h4>
					<ul className="list-group">
						{categorias.length === 0 ? (
							<li className="list-group-item">No hay categorias</li>
						) : (
							categorias.map(item => (
								<li className="list-group-item" key={item.id}>
									<span className="lead">{item.nombreCategoria}</span>

									<button
										className="btn btn-danger btn-sm float-right mx-2"
										onClick={() => eliminarCategoria(item.id)}>
										Eliminar
									</button>

									<button className="btn btn-warning btn-sm float-right" onClick={() => editar(item)}>
										Editar
									</button>
								</li>
							))
						)}
					</ul>
				</div>
				<div className="col-4">
					<h4 className="text-center">{modoEdicion ? "Editar Categoria" : "Agregar Categoria"}</h4>
					<form onSubmit={modoEdicion ? editarCategoria : agregarCategoria}>
						{error ? <span className="text-danger">{error}</span> : null}

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
		</div>
	);
}

export default Ediciondecategorias;
