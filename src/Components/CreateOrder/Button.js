import React from 'react'
const Button = ({ text, type }) => {
    return (
        <div >
            <button type={type} className='button'>{text}</button>            
        </div>
    )
}

export default Button
