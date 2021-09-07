import React from 'react'
import Header from './CreateOrder/Header'
import MakeOrder from './CreateOrder/MakeOrder'
import './CreateOrder/CreateOrder.css'

const CreateOrder = () => {
    return (
        <div className ="container">
            <Header />
            <MakeOrder /> 
        </div>

    )
}

export default CreateOrder
