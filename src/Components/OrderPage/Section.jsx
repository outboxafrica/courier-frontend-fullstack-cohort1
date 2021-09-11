import React,{useContext} from 'react'
import './Section.css'
import {Link} from 'react-router-dom';
import { StateContext, useStateValue } from "../../ContextApi/StateProvider";
import { useHistory } from "react-router-dom";
import {  StateProvider } from '../../ContextApi/StateProvider';
import { orders } from '../../ContextApi/StateProvider';
export const Order = () => {
    const { order } = useContext(StateContext);
    const { deleteOrder} = useContext(StateProvider);

}



const Section = () => {
    // make these as an array not object within array
    const [{ orderno ,quantity, from, to, status, action }] = useStateValue();
    const history = useHistory();

    function removeLocalStorage (e){
        e.preventDefault()
        localStorage.removeItem("orderno")
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
            { orders.map(order=> (<Order key={orderno} order={order}/>))} 

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
                        <Link to= "/CreateOrder"><i class="fas fa-edit icon"></i></Link >
                        {/* add value */}
                        <i class="fas fa-trash-alt icon" value={orders} onClick= {() =>deleteOrder(order.orderno)}></i>
                        </div>
                    </li>
               </ul> 
               {/* add orders from here */}
               <button className ="button"><Link to= "/CreateOrder">New Order</Link></button>
            </div>
            
        </div>
    )
}


export default Section
