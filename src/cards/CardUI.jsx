import React from 'react';
// import img1 from '../assets/A330-200-Hifly-Nepal-Airlines-landing.jpg';
import './card-style.css';

const Card = props =>{

    return (
        <div className = "card text-center shadow">
            <div className = "overflow">
                <img src={props.imgsrc} alt="image 1" className ="card-img-top"></img>
            </div>
            <div className = "card-body text-dark">
                <h4 className = "card-title">{props.title}</h4>
                <p className = "card-text text-secondary">
                {props.paragraph}
                    
                </p>
                <a href ="#" className = "btn btn-outline-success">Select for More Information</a> 
            </div>
        </div>


    );



}
export default Card;


