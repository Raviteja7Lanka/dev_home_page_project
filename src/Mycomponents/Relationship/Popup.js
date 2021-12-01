import React from 'react';
import './Popup.css'

export default function Popup(props) {
    console.log(props.trigger)
    return (props.trigger)?(
        <div className="popup">
            {console.log('Popup triggered')}
            <div className="popup-inner">
              <h3> Are you sure!! wanna create this Recipe</h3>
              <button className="close-btn " onClick={() =>props.settrigger(false)}>No! I dont </button>
              <button className="Close-btn-btn " onClick={() =>{
                  props.settrigger(false)
                  props.sentfun()
                  } 
                  }>Yes! I want to</button>
              
            </div>
            
        </div>
    ):"";
}
