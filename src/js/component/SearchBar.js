import React from "react";

const SearchBar = ({ Keyword, setKeyword }) => {
	const BarStyling = { width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem" };
	return (
		<input
			style={BarStyling}
			key="random1"
			value={Keyword}
			placeholder={"Buscar"}
			onChange={e => setKeyword(e.target.value)}
		/>
	);
};

export default SearchBar;
