import React,{ useEffect, useState} from 'react'
import axios from 'axios';
import './Section.css'
import {Link} from 'react-router-dom';

const Section = () => {

    const [infor, setInfor] = useState(null);

    const baseURL = "https://courier-fullstack-api.herokuapp.com/api/v1/parcels"

    useEffect(() => {
        // const ac = new AbortController();
        // axios.get(baseURL,{signal: ac.signal}).then((res)=>{
        //     setInfor((res.data).reverse())
            
        // })
        // .catch((err)=>{
        //     console.log(err)
        // })
       fetch(baseURL,{
           headers:{
                'Content-Type': 'application/json',
                'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNGE1MTc3ZTdmYTdhMDAxNmQ0N2FkZCIsImlhdCI6MTYzMjI2MDQ3MSwiZXhwIjoxNjMyNTE5NjcxfQ.w4R1mq6NM_cPwEFsM82lB9-t9FUGxUfUMDKOpe8tFEA'
           }
       })
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            setInfor(data);
        })
        .catch((err)=>{
            console.log(err);
        })
       
    }, [])
    

  const remove= (id)=>{
    axios.delete(`https://courier-fullstack-api.herokuapp.com/api/v1/parcels/${id}`)
  }

    return (
        <>
        {infor ? 
             <div className = "section">
        <h1>My Orders</h1>

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
                                        <Link to= "/CreateOrder" className="icon" ><i className="fas fa-edit icon"></i></Link >
                                    
                                        <i className="fas fa-trash-alt icon" onClick ={remove(order._id)}></i>
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
