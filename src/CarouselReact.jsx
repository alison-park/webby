import React, {useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselStyling.css';
import ContactModal from './Modal/ContactModal';
import Modal from './Modal/Modal';
import ProjectsModal from './Modal/ProjectsModal';

const CarouselPage = () => {
    const onClick=()=>{
        console.log('Button');
    }
    const [show, setShow] = useState(false);
    const [showProject, setShowProject] = useState(false);
    const [showContact, setShowContact] = useState(false);
    return ( 
     <div>
           
         <Modal onClose={()=>setShow(false)} show={show}/>
         <ProjectsModal onClose={()=>setShowProject(false)} showProject={showProject}/>
         <ContactModal onClose={()=>setShowContact(false)} showContact={showContact}/>
    
        <div id="Cards"> 
          
        <Carousel id="Carousel" useKeyboardArrows>
         <div onClick={()=> setShow(true)} className='button'  role='button' >
            
            <img src="a_icon.svg" />
            <p className="legend">About Me</p>
        </div>

         <div onClick={()=>setShowProject(true)} className='button'  role='button' >
            <img src="work.svg" />
            <p className="legend">Things I've Done</p>
        </div>
        <div onClick={()=>setShowContact(true)} className='button'  role='button' >
            <img src="emailz.svg" />
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