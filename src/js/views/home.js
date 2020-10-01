import React from "react";
import "../../styles/home.scss";
import ReactDOM from "react-dom";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
		</div>
	);
};

ReactDOM.render(<Home />, document.querySelector("#app"));
