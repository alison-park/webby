import MenuStyles from './MenuStyles.css'
import Modal from './../Modal/Modal';
import React, {useState} from 'react';

export default function Menu() {
    const [open, setOpen] = React.useState(false);
    const [show, setShow] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    }
    const handleMenuOne=()=> {
        setShow(true);
        setOpen(false);

    }
    const handleMenuTwo = () =>{
        setOpen(false);
    }
    const handleMenuThree = () =>{
        setOpen(false);
    }
    return (
        <>
            <div className="dropdown-menu">
            <Modal onClose={()=>setShow(false)} show={show}/>
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