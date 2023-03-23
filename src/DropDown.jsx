import React, {useState} from 'react';
import './DropDownStyles.css';
import Modal from './Modal/Modal';

function BasicExample(){
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
    
    return(
        <div>
            <Modal onClose={()=>setShow(false)} show={show}/>
            <button onClick={handleOpen}>al!son park</button>
            {open ? (
                <ul className='menu'>
                    <li className='menu-item1'>
                        <button onClick={handleMenuOne}>About Me</button>
                    </li>
                    <li className='menu-item'>
                        <button onClick={handleMenuTwo} >Things I've Done</button>
                    </li>
                    <li className='menu-item'>
                        <button onClick={handleMenuThree} >Contact Info</button>
                    </li>
                </ul>
            ): null}
            {open ? <div> </div>: <div> </div>}
        </div>
    )
}
/*
function BasicExample() {
   
  return (

    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
    <Dropdown>
      <Dropdown.Toggle variant="success">
        al!son park
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">About Me</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Things I've Done</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Contact Info</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
  
}
*/
export default BasicExample;