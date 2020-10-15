import React, { useState, useEffect } from "react";
//import SearchBar from "../component/SearchBar";
//import ProductList from "../component/ProductList";

//export const Login = () => {
export const SearchPage = () => {
	//const SearchPage = props => {
	const [input, setInput] = useState("");
	const [ProductListDefault, setProductListDefault] = useState();
	const [ProductList, setProductList] = useState([]);

	const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };

	const fetchData = async () => {
		return await fetch("https://3000-e5425567-7649-45fc-8f39-2d28c8b9aee9.ws-us02.gitpod.io/productos")
			.then(response => response.json())
			.then(data => {
				setProductList(data);
				setProductListDefault(data);
			});
	};

	const updateInput = async input => {
		const filtered = ProductListDefault.filter(producto => {
			return producto.titulo.toLowerCase().includes(input.toLowerCase());
		});
		setInput(input);
		setProductList(filtered);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<h1>Lista de Productos</h1>
			<input
				style={BarStyling}
				value={input}
				placeholder={"Buscar producto"}
				onChange={e => updateInput(e.target.value)}
			/>
			{ProductList.map((data, index) => {
				if (data) {
					return (
						<div key={data.titulo}>
							<h1>{data.titulo}</h1>
							<img src={data.imagen} className="card-img-top" alt="..." />
						</div>
					);
				}
				return null;
			})}
		</>
	);
};

//export default SearchPage;
