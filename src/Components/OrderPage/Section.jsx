import React from 'react'
import './Section.css'

const Section = () => {
    return (
        <div className = "section">
            <h1>My Orders</h1>

            <div className = "order-section">
               <div className = "titles">
                    <p>Order No.</p>
                    <p>Quantity</p>
                    <p>From</p>
                    <p>To</p>
                    <p>Delivery Status</p>
                    <p>Action</p>
               </div>
               <ul className = "list">
                    <li className ="item">
                        <p>N012</p>
                        <p>Quality</p>
                        <p>Fort Potal</p>
                        <p>Kampala</p>
                        <p>Pending</p>
                        <div className="list-icons">
                        <i class="fas fa-edit icon"></i>
                        <i class="fas fa-trash-alt icon"></i>
                        </div>
                    </li>
               </ul> 
               <button className ="button">New Order</button>
            </div>
            
        </div>
    )
}

export default Section
