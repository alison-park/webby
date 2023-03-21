import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselStyling.css';
import Modal from './Modal/Modal';
const CarouselPage = () => {
    const onClick=()=>{
        console.log('Button');
    }
    const [show, setShow] = useState(false);
    return ( 
     <div>
           
         <Modal onClose={()=>setShow(false)} show={show}/>
    
        <div id="Cards"> 
          
        <Carousel id="Carousel" useKeyboardArrows>
         <div onClick={()=> setShow(true)} className='button'  role='button' >
            
            <img src="./public/a_icon.svg" />
            <p className="legend">About Me</p>
        </div>

         <div onClick={onClick} className='button'  role='button' >
            <img src="./public/work.svg" />
            <p className="legend">Things I've Done</p>
        </div>
        <div onClick={onClick} className='button'  role='button' >
            <img src="./public/emailz.svg" />
            <p className="legend">Contact Me</p>
        </div>
        </Carousel>
        </div>
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