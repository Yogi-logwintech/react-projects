import '../index.css'
import React from 'react'
// import Photo from '../images/Pinterest.jpg'

export default function Hero() {
    return (
        <section className='hero'>
            <img className='hero--photo' src='../images/Pinterest.jpg' />
            <h1 className="hero--header">Online Experience</h1>
            <p className='hero--text'>Join unique interactive activites led by
                one-of-a-kind host-all without leaving home.
            </p>
        </section>
    )
}
