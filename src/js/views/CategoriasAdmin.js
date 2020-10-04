import React, { useState, useContext } from "react";
import shortid from "shortid";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CategoriasAdmin = () => {
	// Creo los estados
	const [nombre, setNombre] = useState(""); // este seria el nombre de la categoria
	const [descripcion, setDescripcion] = useState(""); // descripcion de la categoria
	const [icono, setIcono] = useState(""); // icono de la categoria
	const [categorias, setCategorias] = useState([]); // estado de la lista de categorias?
	const [modoEdicion, setModoEdicion] = useState(false);
	const [id, setId] = React.useState("");
	const { store, actions } = useContext(Context);

	const agregarCategoria = e => {
		e.preventDefault();
		if (!nombre.trim()) {
			console.log("Nombre de categoria vacío");
			return;
		}

		if (!descripcion.trim()) {
			console.log("Descripcion esta vacía");
			return;
		}

		if (!icono.trim()) {
			console.log("El icono esta vacía");
			return;
		}
		console.log(nombre);
		console.log(descripcion);
		console.log(icono);
		//console.log("procesando datos..." + categoria + descripcion);

		setCategorias([
			...categorias,
			{
				id: shortid.generate(),
				nombreCategoria: nombre,
				descripcionCategoria: descripcion,
				iconoCategoria: icono
			}
		]);

		setNombre("");
		setDescripcion("");
		setIcono("");
	};

	// aca tiene que estar integrado con el context también para que haga la funcion
	const eliminarCategoria = id => {
		//console.log(id);
		const arrayFiltrado = categorias.filter(item => item.id !== id);
		setCategorias(arrayFiltrado);
	};

	const editar = item => {
		console.log(item);
		setModoEdicion(true);
		setNombre(item.nombreCategoria);
		setDescripcion(item.descripcionCategoria);
		setIcono(item.iconoCategoria); // agregue este que no estaba
		setId(item.id);
	};

	const editarCategoria = e => {
		e.preventDefault();
		if (!nombre.trim()) {
			console.log("Elemento Vacío");
			//setError('Escriba algo por favor...')
			return;
		}

		if (!descripcion.trim()) {
			console.log("Descripcion vacía");
			return;
		}

		if (!icono.trim()) {
			console.log("Icono vacío");
			return;
		}

		const arrayEditado = categorias.map(
			item =>
				item.id === id
					? { id: id, nombreCategoria: nombre, descripcionCategoria: descripcion, iconoCategoria: icono }
					: item
		); // creo que se modificaria así

		setCategorias(arrayEditado);
		setModoEdicion(false);
		setNombre("");
		setDescripcion("");
		setIcono(""); // replique la linea anterior
		setId("");
		//setError(null)
	};

	const guardarCategoria = () => {
		if (nombre.trim() != "" && descripcion.trim() != "" && icono.trim() != "") {
			actions.fetchCrearCategoria(categorias);
		} else {
			console.log("debe llenar todos los campos");
		}
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
									<br />
									<span className="lead">{item.descripcionCategoria}</span>
									<br />
									<span className="lead">{item.iconoCategoria}</span>

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

								<hr />
								<span className="lead">Descripcion</span>

								<hr />
								<span className="lead">Icono</span>
							</li>
						</ul>
					</div>

					<div className="col-12">
						<h4 className="text-center">{modoEdicion ? "Editar Categoria" : "Agregar Categoria"}</h4>
						<form onSubmit={modoEdicion ? editarCategoria : agregarCategoria}>
							<input
								type="text"
								className="form-control mb-2"
								placeholder="Ingrese nombre de la Categoria"
								onChange={e => setNombre(e.target.value)}
								value={nombre}
							/>

							<input
								type="text"
								className="form-control mb-2"
								placeholder="Ingrese una descripcion"
								onChange={e => setDescripcion(e.target.value)}
								value={descripcion}
							/>

							<input
								type="text"
								className="form-control mb-2"
								placeholder="Ingrese un icono para la categoria"
								onChange={e => setIcono(e.target.value)} // tambien agregue este input
								value={icono}
							/>

							{modoEdicion ? (
								<button className="btn btn-warning btn-block" type="submit">
									Editar
								</button>
							) : (
								<button className="btn btn-dark btn-block" type="submit" onClick={guardarCategoria}>
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
