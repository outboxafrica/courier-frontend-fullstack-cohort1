import React,{ useEffect, useState} from 'react'
import axios from 'axios';
import './Section.css'
import {Link} from 'react-router-dom';

const Section = () => {

  
    const [infor, setInfor] = useState(null);

    const baseURL = "https://courier-fullstack-api.herokuapp.com/parcels"

    useEffect(() => {
        const ac = new AbortController();
        axios.get(baseURL,{signal: ac.signal}).then((res)=>{
            // console.log(res.data);
            setInfor((res.data).reverse())
            
        })
        .catch((err)=>{
            console.log(err)
        })
       
       
    }, [])
    
  console.log(infor)

  const remove= (id)=>{
  axios.delete(`https://courier-fullstack-api.herokuapp.com/parcels/${id}`)
        // .then(() => setStatus('Delete successful'));
  }

    return (
        <>
        {infor ? 
             <div className = "section">
                 {/* {console.log(infor[0])} */}
        <h1>My Orders</h1>
        {/* { orders.map(order=> (<Order key={orderno} order={order}/>))}  */}

        <div className = "order-section">
           <div className = "titles">

                <p>Itemname</p>
                <p>Sender</p>
                <p>Sender's no</p>
                <p>Receiver</p>
                <p>Receiver's no</p>
                <p>Reciver's location</p>
                <p>Action</p>
           </div>
           <ul className = "list">
                <li >
                    {infor.map(order=>{
                        return(
                            <div>
                                <div key = {order._id} className ="item">
                                    <p>{order.itemname}</p>
                                    <p>{order.sendersname}</p>
                                    <p>{order.senderscontact}</p>
                                    <p>{order.receiversname}</p>
                                    <p>{order.receiverscontact}</p>
                                    <p>{order.receiverslocation}</p>
                                    <div className="list-icons">
                                        <Link to= "/CreateOrder"><i class="fas fa-edit icon"></i></Link >
                                    
                                        <i class="fas fa-trash-alt icon" onClick ={remove(order._id)}></i>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })}
                    
                </li>
           </ul> 
           
           <button className ="button"><Link to= "/CreateOrder">New Order</Link></button>
        </div>
        
    </div> : "loading.." }
    </>
       
    )
}


export default Section

// value={orders} onClick= {() =>deleteOrder(order.orderno)}