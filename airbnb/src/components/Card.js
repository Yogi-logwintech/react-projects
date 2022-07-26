import React from 'react';
import '../index.css';
// import path from '../images/ridham9.jpg';

export default function Card({img, star, reviews, country, title, price}) {
    return (
        <div className="card">
            <img src={"../images/"+img} alt="Ridham" className='card--image' />
            <div className='border'></div>
            <div className="card--stats">
                <span className='star'>⭐</span>
                <span>{star}</span>
                <span className='gray'> ({reviews}) | </span>
                <span className='gray'>{country}</span>
            </div>
            <p>Life lessons with {title}</p>
            <p><strong>From ${price}</strong> / person</p>
        </div>
    )
}