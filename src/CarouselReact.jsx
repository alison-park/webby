import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselStyling.css';
const CarouselPage = () => {
    const onClick=()=>{
        console.log('Button');
    }
    return ( 
        <div id="Cards"> 
        <Carousel id="Carousel" useKeyboardArrows>
         <div onClick={onClick} className='button'  role='button' tabindex='0'>
            <img src="./public/a_icon.svg" />
            <p className="legend">About Me</p>
        </div>

         <div onClick={onClick} className='button'  role='button' tabindex='1'>
            <img src="./public/work.svg" />
            <p className="legend">Things I've Done</p>
        </div>
        <div onClick={onClick} className='button'  role='button' tabindex='2'>
            <img src="./public/emailz.svg" />
            <p className="legend">Contact Me</p>
        </div>
        </Carousel>
        </div>
  );
};

export default CarouselPage;
/*
const Button =()=>{
const onClick=()=>{
    console.log('Button');
}
return (
    <button
    type='button'
    onClick ={onClick}
    className='button'
    >
    Delete
    </button>
    );
}
onClick={this.myfunction} */