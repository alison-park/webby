import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselStyling.css';
const CarouselPage = () => {
    return ( 
        <div id="Cards"> 
        <Carousel id="Carousel">
        <div>
            <img src="./public/a_icon.svg" />
            <button className="legend">About Me</button>
        </div>
        <div>
            <img src="./public/work.svg" />
            <button className="legend">Things I've Done</button>
        </div>
        <div>
            <img src="./public/emailz.svg" />
            <button className="legend">Contact Me</button>
        </div>
        </Carousel>
</div>
  );
};

export default CarouselPage;
