import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import faceLogo from './fd.png'

const Logo = () => {
    return(
        <div className='ma4 mt0' style={{width:'150px', height: '150px'}}>
            <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px">
                <div className='br2 shadow-2'>
                    <img alt='logo' src={faceLogo}/>
                </div>
            </Tilt>
        </div>
    )
}

export default Logo