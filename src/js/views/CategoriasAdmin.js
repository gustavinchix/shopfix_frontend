import React, { useState, useContext } from "react";
import shortid from "shortid";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Table from "react-bootstrap/Table";
import slide from "../../img/Imagenedicioncategorias.jpg";
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

	//
	const eliminarCategoria = async id => {
		//const arrayFiltrado = categorias.filter(item => item.id !== id);
		//setCategorias(arrayFiltrado);

		await actions.fetchEliminarCategoria(id);
	};

	const editar = item => {
		console.log(item);
		setModoEdicion(true);
		setNombre(item.nombre);
		setDescripcion(item.descripcion);
		setIcono(item.icono); // agregue este que no estaba
		setId(item.id);
	};

	const editarCategoria = async e => {
		//e.preventDefault();
		if (!nombre.trim()) {
			console.log("Elemento Vacío");
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
		await actions.fetchEditarCategoria({ nombre, descripcion, icono }, id);

		setModoEdicion(false);
		setNombre("");
		setDescripcion("");
		setIcono("");
		setId("");
		//setError(null)
	};

	const guardarCategoria = async () => {
		if (nombre.trim() != "" && descripcion.trim() != "" && icono.trim() != "") {
			await actions.fetchCrearCategoria({ nombre, descripcion, icono });
			//Limpia los input para crear la proxima categoria
			setNombre("");
			setDescripcion("");
			setIcono("");
		} else {
			console.log("debe llenar todos los campos");
		}
	};

	return (
		<div className="categorias">
			<div className="container mt-5">
				<h1 className="text-center">Edicion de Categorías</h1>
				<hr />
				<div className="row">
					<div className="col-lg-6">
						<h4 className="my-4 text-center">Lista de Categorías</h4>
						<Table striped bordered hover size="sm">
							<thead>
								<tr>
									<th>Nombre</th>
									<th>Descripción</th>
									<th>Icono</th>
									<th>Eliminar</th>
									<th>Editar</th>
								</tr>
							</thead>
							{store.categorias.map(item => (
								<tbody key={item.id}>
									<tr>
										<td>{item.nombre}</td>
										<td>{item.descripcion}</td>
										<td>{item.icono}</td>
										<td>
											<button
												className="btn btn-sm btn-danger float-center mx-2"
												onClick={() => eliminarCategoria(item.id)}>
												<i className="fa fa-trash" />
											</button>
										</td>
										<td>
											<button
												className="btn btn-sm btn-warning float-center"
												onClick={() => editar(item)}>
												<i className="far fa-edit" />
											</button>
										</td>
									</tr>
								</tbody>
							))}
						</Table>
					</div>

					<div className="col-lg-6 ">
						<div className="card mt-4">
							<img className="card-img-top img-fluid w-75" src={slide} alt="imagen edicion" />
							<br />
							<h4 className="text-center">{modoEdicion ? "Editar Categoria" : "Agregar Categoría"}</h4>
							<form onSubmit={modoEdicion ? editarCategoria : agregarCategoria}>
								<input
									type="text"
									className="form-control mb-2"
									placeholder="Ingrese nombre para la Categoría"
									onChange={e => setNombre(e.target.value)}
									value={nombre}
								/>

								<input
									type="text"
									className="form-control mb-2"
									placeholder="Ingrese una descripción"
									onChange={e => setDescripcion(e.target.value)}
									value={descripcion}
								/>

								<input
									type="file"
									name="ImageFile"
									label="Seleccionar icono"
									className="form-control mb-2"
									placeholder="Seleccione un icono"
									onChange={e => setIcono(e.target.value)}
									value={icono}
								/>

								<br />
								{modoEdicion ? (
									<button className="btn btn-block" type="button" onClick={editarCategoria}>
										Editar
									</button>
								) : (
									<button className="btn btn-block" type="button" onClick={guardarCategoria}>
										Agregar
									</button>
								)}
							</form>
						</div>
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
						<button type="button" className="btn btn-lg">
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
