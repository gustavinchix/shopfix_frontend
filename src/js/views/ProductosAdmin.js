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
	const [categoria, setCategoria] = useState(""); // categoria del producto
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
		if (!categoria.trim()) {
			console.log("La categoria del producto está vacía");
			return;
		}
		console.log(titulo);
		console.log(descripcion);
		console.log(precio);
		console.log(imagen);
		console.log(categoria);
		//console.log("procesando datos..." + categoria + descripcion);

		setProductos([
			...productos,
			{
				id: shortid.generate(),
				tituloProducto: titulo,
				descripcionProducto: descripcion,
				precioProducto: precio,
				imagenProducto: imagen,
				categoriaProducto: categoria
			}
		]);

		setTitulo("");
		setDescripcion("");
		setPrecio("");
		setImagen("");
		setCategoria("");
	};

	// aca tiene que estar integrado con el context también para que haga la funcion
	const eliminarProducto = id => {
		//console.log(id);
		const arrayFiltrado = productos.filter(item => item.id !== id);
		setProductos(arrayFiltrado);
	};

	const editar = item => {
		console.log(item);
		setModoEdicion(true); // revisar esto
		setTitulo(item.tituloProducto);
		setDescripcion(item.descripcionProducto);
		setPrecio(item.precioProducto);
		setImagen(item.imagenProducto);
		setCategoria(item.categoriaProducto);
		setId(item.id);
	};

	const editarProducto = e => {
		e.preventDefault();
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

		if (!categoria.trim()) {
			console.log("Categoría vacía");
			return;
		}

		const arrayEditado = productos.map(
			item =>
				item.id === id
					? {
							id: id,
							tituloProducto: titulo,
							descripcionProducto: descripcion,
							precioProducto: precio,
							imagenProducto: imagen,
							categoriaProducto: categoria
					  }
					: item
		);

		setProductos(arrayEditado);
		setModoEdicion(false);
		setTitulo("");
		setDescripcion("");
		setPrecio("");
		setImagen("");
		setCategoria("");
		setId("");
		//setError(null)
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
							{productos.map(item => (
								<tbody key={item.id}>
									<tr>
										<td>{item.imagenProducto}</td>
										<td>{item.tituloProducto}</td>
										<td>{item.descripcionProducto}</td>
										<td>{item.precioProducto}</td>
										<td>{item.categoriaProducto}</td>
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
									type="text"
									className="form-control mb-2"
									placeholder="Seleccione una imagen para el producto"
									onChange={e => setImagen(e.target.value)}
									value={imagen}
								/>

								<input
									type="text"
									className="form-control mb-2"
									placeholder="Ingrese una categoría para el producto"
									onChange={e => setCategoria(e.target.value)}
									value={categoria}
								/>
								<br />
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
