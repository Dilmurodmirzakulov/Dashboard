import React from 'react'
import '../style/navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='nav-container'>
                <div className='company-name'>SHAFFOF QURILISH</div>
                <div className='nav-user-info'>
                    <div className='profile-image-container'>
                        <img className='profile-image' src={require('../images/user.jpg')} alt='user' />
                    </div>
                    <div className='profile-name'>
                        <div>Luke Asote</div>
                        <p>Admin for Associations</p>
                    </div>
                    <div className='more-btn'></div>
                </div>
            </div>
        </>
    )
}

export default Navbar