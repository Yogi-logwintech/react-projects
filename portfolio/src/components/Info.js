import '../index.css';
import React from 'react';
import myPhoto from '../images/yogi.png'

function Info () {
    return (
        <div className='info'>
            <img src={myPhoto} width='100%' className='info--img' />
            <h2 className="info--name">Yogi Gabani</h2>
            <h4 className='info--title'>VFX Editor</h4>
            <p className='info--website'>4jobby.000webhostapp.com</p>
            {/* <div className='info--btn'> */}
                <button className='info--email info--btn'>Email</button>
                <button className='info--btn info--linkedin'>LinkedIn</button>
            {/* </div> */}
        </div>
    )
}

export default Info;