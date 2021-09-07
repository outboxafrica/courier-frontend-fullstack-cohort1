import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div>
        <nav className = "navbar">
            <div className = "logo">
                <h1>Safe Courier</h1>
            </div>

            <div className = "nav-icons">
            <i class="fas fa-envelope-open-text"></i>
            <i class="fas fa-bell"></i>
            <i class="fas fa-user-circle"></i>

            </div>
         
        </nav>
        <img className = "image" src="https://res.cloudinary.com/awesomeone-maria/image/upload/v1630576323/capstone%20Project/undraw_takeout_boxes_ap54_xamxen.svg" alt="Delivery" />
        </div>
    )
}

export default Header
