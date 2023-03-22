import MenuStyles from './MenuStyles.css'
import Modal from './../Modal/Modal';
import React, {useState} from 'react';
import ProjectsModal from './../Modal/ProjectsModal';
import ContactModal from '../Modal/ContactModal';

export default function Menu() {
    const [open, setOpen] = React.useState(false);
    const [show, setShow] = useState(false);
    const [showProject, setShowProject] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    const handleMenuOne=()=> {
        setShow(true);
        setOpen(false);

    }
    const handleMenuTwo = () =>{
        setShowProject(true);
        setOpen(false);
    }
    const handleMenuThree = () =>{
        setShowContact(true);
        setOpen(false);
    }
    return (
        <>
            <div className="dropdown-menu">
            <Modal onClose={()=>setShow(false)} show={show}/>
            <ProjectsModal onClose={()=>setShowProject(false)} showProject={showProject}/>
            <ContactModal onClose={()=>setShowContact(false)} showContact={showContact}/>
                <div className='item'>
                    <button className="buttonstyled" onClick={handleMenuOne}>About Me</button>
                </div>
                
                <div className='item'>
                    <button className="buttonstyled" onClick={handleMenuTwo}>Things I've Done</button>
                </div>
                <div className='item'>
                    <button className="buttonstyled" onClick={handleMenuThree}>Contact Info</button>
                </div>
            </div>
        </>
    )
}