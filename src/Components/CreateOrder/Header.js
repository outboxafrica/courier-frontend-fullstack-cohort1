import React from 'react'

const Header = () => {
    return (
        <header className ='navbar'>  
            
            <div className = "logo">
                <h1>Safe Courier</h1>
            </div>

            <div className = "nav-icons">
            <i class="fas fa-envelope-open-text"></i>
            <i class="fas fa-bell"></i>
            <i class="fas fa-user-circle"></i>

            </div>
         
        
        </header>
    )
}

export default Header
