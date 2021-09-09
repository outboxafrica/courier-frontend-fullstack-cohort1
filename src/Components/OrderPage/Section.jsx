import React from 'react'
import './Section.css'
import {Link} from 'react-router-dom';
import { useStateValue } from "../../ContextApi/StateProvider";
import { useHistory } from "react-router-dom";

const Section = () => {
    const [{ orderno ,quantity, from, to, status, action }] = useStateValue();
    const history = useHistory();

    function removeLocalStorage (e){
        e.preventDefault()
        localStorage.removeItem("oderno")
        localStorage.removeItem("quantity")
        localStorage.removeItem("from")
        localStorage.removeItem("to")
        localStorage.removeItem("status")
        localStorage.removeItem("action")
        history.push("/")
    }
    return (
        <div className = "section">
            <h1>My Orders</h1>

            <div className = "order-section">
               <div className = "titles">
                    <p>Order No.</p>
                    <p>Quantity</p>
                    <p>From</p>
                    <p>To</p>
                    <p>Status</p>
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
               <button className ="button"><Link to= "/CreateOrder">New Order</Link></button>
            </div>
            
        </div>
    )
}

export default Section
