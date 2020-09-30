import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../../styles/home.scss";
//import { Link } from "react-router-dom";
import slide1 from "../../img/Carouselslide1.jpg";
import slide2 from "../../img/Carouselslide2.jpg";
import slide3 from "../../img/Carouselslide3.jpg";

export const ControlledCarousel = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img className="d-block img-fluid w-100" src={slide1} alt="First slide" />
				<Carousel.Caption>
					<div className="caption">
						<p>NUEVO</p>
						<h1>Colección Hogar</h1>
						<p>Lorem ipsum dolor sit ametmm, consectetur adipiscing elit.</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block img-fluid w-100" src={slide2} alt="Second slide" />

				<Carousel.Caption>
					<div className="caption-tv">
						<p>DESCUENTOS</p>
						<h1>LED TV</h1>
						<p>
							Lorem ipsum dolor sit ametmm, consectetur adipiscing elit.
							<br />
							Phasellus blandit massa enim.
						</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block img-fluid w-100" src={slide3} alt="Third slide" />

				<Carousel.Caption>
					<div className="caption">
						<p>NIÑOS</p>
						<h3>Colección Verano 2020</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
