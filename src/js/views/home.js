import React, { useState } from "react";
import "../../styles/home.scss";
//import { Navbar } from "../component/navbar";
import { ControlledCarousel } from "../../js/component/ControlledCarousel";
import { ProductCategories } from "../../js/component/ProductCategories";
import { Card } from "../component/cardshop";
//import { CategorieswithCarousel } from "../component/CategorieswithCarousel";
// import { ControlledCarousel } from "./component/ControlledCarousel";
//import { Carousel } from "./component/carousel";

export const Home = () => (
	<div>
		<ControlledCarousel />
		<Card />
		<ProductCategories />
	</div>
);
