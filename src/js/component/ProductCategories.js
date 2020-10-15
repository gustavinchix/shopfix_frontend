import React from "react";
//import "../../styles/index.scss";
import "../../styles/ProductCategories.scss";
import ShoppingWomen from "../../img/women-s-pink-sweatshirt-and-brown-plaid-skirt-794064.jpg";
import ShoppingMen from "../../img/selective-focus-photo-of-man-wearing-black-turtleneck-top-837140.jpg";
import ShoppingKids from "../../img/kids-pic.jpg";
import ShoppingHome from "../../img/categoria4.jpg";
import ShoppingElectronics from "../../img/categoria5.jpg";
import ShoppingFood from "../../img/backupcategoria6.jpg";
import { Card } from "../component/cardshop";

export const ProductCategories = () => {
	return (
		<div className="products-category-container">
			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-6">
					<div className="card-product card-body-product-categories">
						<img className="card-img-top" src={ShoppingWomen} alt="Products" />
						<div className="card-body ">
							{/* <h3 className="card-title ">Shop Women's</h3> */}
							<a href="/collections/women" className="stretched-link">
								{"Mujer"}
							</a>
						</div>
					</div>
				</div>

				<div className="col-lg-4 col-md-4 col-sm-6 ">
					<div className="card-product card-body-product-categories">
						<img className="card-img-top " src={ShoppingMen} alt="Products" />
						<div className="card-body">
							<a href="/collections/men" className="stretched-link">
								{"Hombre"}
							</a>
						</div>
					</div>
				</div>

				<div className="col-lg-4 col-md-4 col-sm-6  ">
					<div className="card-product card-body-product-categories">
						<img className="card-img-top" src={ShoppingKids} alt="Products" />

						<div className="card-body">
							{/* <h3 className="card-title">Shop Kid's</h3> */}

							<a href="/collections/kids" className="stretched-link">
								{"Niños"}
							</a>
						</div>
					</div>
				</div>
			</div>
			<br />
			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-6 ">
					<div className="card-product card-body-product-categories">
						<img className="card-img-top " src={ShoppingHome} alt="Products" />
						<div className="card-body">{/* <h3 className="card-title">Shop Home</h3> */}</div>
						<div className="card-country-info">
							<a href="/collections/men" className="stretched-link">
								{"Hogar"}
							</a>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-md-4 col-sm-6">
					<div className="card-product card-body-product-categories">
						<img className="card-img-top" src={ShoppingElectronics} alt="Products" />
						<div className="card-body ">
							{/* <h3 className="card-title ">Shop Electronics</h3> */}
							<a href="/collections/women" className="stretched-link">
								{"Electrónicos"}
							</a>
						</div>
					</div>
				</div>

				<div className="col-lg-4 col-md-4 col-sm-6  ">
					<div className="card-product card-body-product-categories">
						<img className="card-img-top" src={ShoppingFood} alt="Products" />

						<div className="card-body">
							{/* <h3 className="card-title">Shop Food</h3> */}

							<a href="/collections/kids" className="stretched-link">
								{"Snacks"}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
