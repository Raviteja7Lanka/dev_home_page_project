import React from 'react'
import img1 from '../Mycomponents/pic/ras1.jpg';
import "./Card-style.css";

export const Card = props => {
    return (
        <div className ="card text-center">
            <div className ="overflow">

            <img src={img1} alt='image1' className ="card-img-top"/>
            </div>
            <div className ="card-body-text">
            <h4 className ="card-title">{props.title}</h4>
            <p className ="card-text-secondary">Info
            </p>
            <a href={props.links} className='btn btn-outline-success'>click Here</a>
            </div> 
        </div>
    )
}

export default Card;
