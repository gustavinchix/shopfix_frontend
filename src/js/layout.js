import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Edicion } from "./views/Edicion";
import { CategoriasAdmin } from "./views/CategoriasAdmin";
import { ProductosAdmin } from "./views/ProductosAdmin";

import { Single } from "./views/single";

import injectContext from "./store/appContext";
//import { Card } from "./component/cardshop";

import { Navbar } from "./component/navbar";
import { Login } from "./views/Login";
import { Footer } from "./component/footer";
import { SearchPage } from "./views/SearchPage";
import { CategoriaCard } from "./component/CategoriaCard";

import { CategorySix } from "./views/CategorySix";
import { CategoryFour } from "./views/CategoryFour";
import { CategoryFive } from "./views/CategoryFive";
import { CategoryOne } from "./views/CategoryOne";
import { CategoryTwo } from "./views/CategoryTwo";
import { CategoryThree } from "./views/CategoryThree";
// import { SearchPage } from "./views/SearchPage";

const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>

						<Route exact path="/login">
							<Login />
						</Route>

						<Route exact path="/search">
							<SearchPage />
						</Route>

						<Route exact path="/categoriacard">
							<CategoriaCard />
						</Route>

						<Route exact path="/edicion">
							<Edicion />
						</Route>

						<Route exact path="/productosadmin">
							<ProductosAdmin />
						</Route>

						<Route exact path="/categoriasadmin">
							<CategoriasAdmin />
						</Route>

						<Route exact path="/categoryone">
							<CategoryOne />
						</Route>

						<Route exact path="/categorytwo">
							<CategoryTwo />
						</Route>

						<Route exact path="/categorythree">
							<CategoryThree />
						</Route>

						<Route exact path="/categoryfour">
							<CategoryFour />
						</Route>

						<Route exact path="/categoryfive">
							<CategoryFive />
						</Route>

						<Route exact path="/categorysix">
							<CategorySix />
						</Route>

						<Route exact path="/single/:theid">
							<Single />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
