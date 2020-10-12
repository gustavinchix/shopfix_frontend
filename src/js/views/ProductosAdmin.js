import React, { useState, useContext } from "react";
import shortid from "shortid";
import "../../styles/index.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Table from "react-bootstrap/Table";
import banner from "../../img/IconosProductos.jpg";

export const ProductosAdmin = () => {
	// Creo los estados
	const [titulo, setTitulo] = useState(""); // este seria el titulo del producto
	const [descripcion, setDescripcion] = useState(""); // descripcion del producto
	const [precio, setPrecio] = useState(""); // precio del producto
	const [imagen, setImagen] = useState(""); // imagen del producto
	//const UserImages = props => {
	//**const [categoria, setCategoria] = useState(""); // categoria del producto
	const [categoria_id, setCategoria_id] = useState(""); // id de la categoria del producto**
	const [productos, setProductos] = useState([]); // estado de la lista de productos
	const [modoEdicion, setModoEdicion] = useState(false);
	const [id, setId] = React.useState("");
	const { store, actions } = useContext(Context);

	const agregarProducto = e => {
		e.preventDefault();
		if (!titulo.trim()) {
			console.log("titulo del producto vacío");
			return;
		}

		if (!descripcion.trim()) {
			console.log("la descripcion del producto está vacía");
			return;
		}

		if (!precio.trim()) {
			console.log("el precio del producto no está indicado");
			return;
		}

		if (!imagen.trim()) {
			console.log("La imagen del producto está vacía");
			return;
		}
		if (!categoria_id.trim()) {
			console.log("El id categoria está vacío");
			return;
		}
		console.log(titulo);
		console.log(descripcion);
		console.log(precio);
		console.log(imagen);
		console.log(categoria_id);
		//console.log("procesando datos..." + categoria + descripcion);

		setProductos([
			...productos,
			{
				id: shortid.generate(),
				tituloProducto: titulo,
				descripcionProducto: descripcion,
				precioProducto: precio,
				imagenProducto: imagen,
				categoriaProducto: categoria_id
			}
		]);

		setTitulo("");
		setDescripcion("");
		setPrecio("");
		setImagen("");
		setCategoria_id("");
	};

	const guardarProducto = async () => {
		if (
			titulo.trim() != "" &&
			descripcion.trim() != "" &&
			precio.trim() != "" &&
			imagen.trim() != "" &&
			//**categoria.trim() != "" &&
			categoria_id.trim() != ""
		) {
			await actions.fetchCrearProducto({ titulo, descripcion, precio, imagen, categoria_id });
			//Limpia los input para crear el proximo producto
			setTitulo("");
			setDescripcion("");
			setPrecio("");
			setImagen("");
			//setCategoria("");
			setCategoria_id(""); // seria null estado inicial?
		} else {
			console.log("debe llenar todos los campos");
		}
	};

	// aca tiene que estar integrado con el context también para que haga la funcion
	const eliminarProducto = id => {
		//console.log(id);
		const arrayFiltrado = productos.filter(item => item.id !== id);
		setProductos(arrayFiltrado);
	};

	//
	const editar = item => {
		console.log(item);
		setModoEdicion(true);
		setTitulo(item.titulo);
		setDescripcion(item.descripcion);
		setPrecio(item.precio);
		setImagen(item.imagen);
		//**setCategoria(item.categoria);
		setCategoria_id(item.categoria_id);
		setId(item.id);
	};

	const editarProducto = async e => {
		if (!titulo.trim()) {
			console.log("Elemento Vacío");
			//setError('Escriba algo por favor...')
			return;
		}

		if (!descripcion.trim()) {
			console.log("Descripcion vacía");
			return;
		}

		if (!precio.trim()) {
			console.log("Precio vacío");
			return;
		}

		if (!imagen.trim()) {
			console.log("Icono vacío");
			return;
		}

		if (!categoria_id.trim()) {
			console.log("Categoría vacía");
			return;
		}

		await actions.fetchEditarProducto({ titulo, descripcion, precio, imagen, categoria_id }, id);

		//Limpia los input para crear el proximo producto
		setModoEdicion(false);
		setTitulo("");
		setDescripcion("");
		setPrecio("");
		setImagen("");
		//**setCategoria("");
		setCategoria_id("");
		setId("");
	};

	return (
		<div className="productos">
			<div className="container mt-5">
				<h1 className="text-center">Edición de Productos</h1>
				<hr />
				<div className="row">
					<div className="col-lg-12">
						<h4 className="my-4 text-center">Lista de Productos</h4>
						<Table striped bordered hover size="sm">
							<thead>
								<tr>
									<th>Producto</th>
									<th>Título</th>
									<th>Descripcion</th>
									<th>Precio</th>
									<th>Categoria</th>
									<th>Remover</th>
									<th>Editar</th>
								</tr>
							</thead>
							{store.productos.map(item => (
								<tbody key={item.id}>
									<tr>
										<td>{item.imagen}</td>
										<td>{item.titulo}</td>
										<td>{item.descripcion}</td>
										<td>{item.precio}</td>
										<td>{item.categoria_id}</td>
										<td>
											<button
												className="btn btn-sm btn-danger float-center mx-2"
												onClick={() => eliminarProducto(item.id)}>
												<i className="fa fa-trash" aria-hidden="true" />
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

					<div className="col-lg-12">
						<div className="card mt-4">
							<img className="card-img-top img-fluid" src={banner} alt="imagen productos" />
							<br />
							<h4 className="text-center">{modoEdicion ? "Editar Producto" : "Agregar Producto"}</h4>
							<form onSubmit={modoEdicion ? editarProducto : agregarProducto}>
								<input
									type="text"
									className="form-control mb-2"
									placeholder="Ingrese título para el producto"
									onChange={e => setTitulo(e.target.value)}
									value={titulo}
								/>

								<input
									type="text"
									className="form-control mb-2"
									placeholder="Ingrese una descripción"
									onChange={e => setDescripcion(e.target.value)}
									value={descripcion}
								/>

								<input
									type="text"
									className="form-control mb-2"
									placeholder="Indique el precio del producto"
									onChange={e => setPrecio(e.target.value)}
									value={precio}
								/>
								<input
									type="file"
									name="ImageFile"
									label="Seleccionar imagen"
									className="form-control mb-2"
									placeholder="Seleccione una imagen para el producto"
									onChange={e => setImagen(e.target.value)}
									value={imagen}
								/>

								<select
									className="custom-select mr-sm-2"
									onChange={e => setCategoria_id(e.target.value)}>
									<option selected>{`Elegir categoria del producto`}</option>
									{store.categorias.map(categoria => (
										<option key={categoria.id} value={categoria.id}>
											{categoria.nombre}
										</option>
									))}
								</select>

								<br />

								{modoEdicion ? (
									<button
										className="btn btn-warning btn-block"
										type="button"
										onClick={editarProducto}>
										Editar
									</button>
								) : (
									<button className="btn btn-dark btn-block" type="button" onClick={guardarProducto}>
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
