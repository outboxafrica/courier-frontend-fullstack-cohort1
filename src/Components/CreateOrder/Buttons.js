import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Buttons = ({onClick}) => {
    return (
        <div className='button-container'>
        <Link to = "/OrderPage"><Button  text='Create Order' onClick = {onClick}/></Link> 
        </div>
    )
}

export default Buttons
