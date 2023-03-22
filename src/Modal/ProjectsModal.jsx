import React from 'react'
import './Modal.css'

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
               This page is currently being updated, but if you'd like to learn more about my past projects feel free to check out my attached resume.
               <p></p>
               <img src='../public/resume.png' width='100px'  height='100px' ></img>
              
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