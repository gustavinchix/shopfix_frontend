import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { SearchBar } from "../component/SearchBar";

export const SearchPage = (props) => {
	const [input, setInput] = useState("");
	const [searchProduct, setSearchProduct] = useState("");
	const [searchCategory, setSearchCategory] = useState("");
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<SearchBar Keyword={searchCategory} setKeyword={setSearchCategory} />
			<button
				className="btn btn-info"
				type="type"
				onClick={() => {
					actions.fetchCargarCategorias(searchCategory);
					//history.push("../Productos");
				}}>
				<i className="fas fa-search" />
			</button>

			<SearchBar Keyword={searchProduct} setKeyword={setSearchProduct} />
			<button
				className="btn btn-info"
				type="type"
				onClick={() => {
					actions.fetchCargarCategorias(searchCategory);
					//history.push("../Productos");
				}}>
				<i className="fas fa-search" />
			</button>
		</div>
	);
};
