import React, {Linking} from 'react'
import './Modal.css'

function addSpace(str) {
    return str.split('').join(' ');
  }
const word=addSpace(": ");
const ContactModal = props => {
    if(!props.showContact){
        return null
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                <h4 className="modal-title"> 📝  Contact Info</h4>
                </div>
           
            <div className="modal-body">
                <center>
                <p></p>
               Email{word}
               <button className="emailButton" onClick={() => window.location = 'mailto:alisonpark2023@u.northwestern.edu'}>alisonpark2023@u.northwestern.edu</button>

               <p></p>
               
                </center> 
               </div>
            <div className="modal-footer">
                <button onClick={props.onClose} className="button">❌</button>
            </div>
        </div>
        </div>
    )
}
export default ContactModal