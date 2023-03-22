import React, {Linking} from 'react'
import './Modal.css'

function addSpace(str) {
    return str.split('').join(' ');
  }
const word=addSpace("y ");
const ProjectsModal = props => {
    if(!props.showProject){
        return null
    }
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className='modal-header'>
                <h4 className="modal-title"> 📝  Things I've Done</h4>
                </div>
           
            <div className="modal-body">
                <center>
                <p></p>
               This page is currently being updated, but if you'd like to learn more about my past projects feel free to check out m{word}  
               
               <a className="resumeLink" href='/api/v1/print/example.pdf' target='_blank' rel='noopener noreferrer'>
                     resume</a>
               <p></p>
                <a href='/api/v1/print/example.pdf' target='_blank' rel='noopener noreferrer'>
                    <img src='../public/resume.png' width='100px'  height='100px' ></img>    
               </a>
                </center> 
               </div>
            <div className="modal-footer">
                <button onClick={props.onClose} className="button">❌</button>
            </div>
        </div>
        </div>
    )
}
export default ProjectsModal