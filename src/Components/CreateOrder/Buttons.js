import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Buttons = () => {
    return (
        <div className='button-container'>
            <Button className='cancel' text='Cancel' />
        <Link to = "/OrderPage"><Button  text='Create Order'/></Link> 
        </div>
    )
}

export default Buttons
