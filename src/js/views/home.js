import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { ControlledCarousel } from "../../js/component/ControlledCarousel";
// import { ControlledCarousel } from "./component/ControlledCarousel";
//import { Carousel } from "./component/carousel";

export const Home = () => (
	<div>
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>

		<ControlledCarousel />
	</div>
);
