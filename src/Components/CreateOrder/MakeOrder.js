import React from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Form from './Form'
import { useState } from 'react'


const MakeOrder = () => {
    const [itemname, setItemname] = useState("")
    const [sendersname, setSendersname] = useState(null)
    const [ senderscontact, setSenderscontact] = useState(null)
    const [ senderslocation, setSenderslocation] = useState(null)
    const [receiversname, setReceiversname] = useState(null)
    const [receiverscontact, setReceiverscontact] = useState(null)
    const [receiverslocation, setReceiverslocation] = useState(null)
    const [ setData] = useState(null)
    let history = useHistory();

    const inforData = {
            itemname:itemname,
            sendersname:sendersname,
            senderscontact:senderscontact,
            senderslocation:senderslocation,
            receiversname:receiversname,
            receiverscontact:receiverscontact,
            receiverslocation:receiverslocation
    }
    
    const baseURL = "https://courier-fullstack-api.herokuapp.com/api/v1/parcels"

    function post(){
        axios.post(baseURL, inforData)

        .then((res)=>{
            console.log(res.data);
            setData((res.data))
            console.log("Data sent")
            history.push("/OrderPage")
            window.location.reload()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        // Form container
        <div>
            <form>
                <ol>
                    <li className ="list">From</li>
                        <div className='Order-form'>
                        <input placeHolder='Enter Item' value={itemname} onChange={(event) => setItemname(event.target.value)}/>
                                {console.log(itemname)}
                            <input placeHolder='Enter Your Name' value={sendersname} onChange={(event) => setSendersname(event.target.value)}/>
                                {console.log(sendersname)}
                            <Form placeHolder='contact' value={senderscontact} onChange={(event) => setSenderscontact(event.target.value)}/>
                              {console.log(senderscontact)}
                              <Form placeHolder='location' value={senderslocation} onChange={(event) => setSenderslocation(event.target.value)}/>
                              {console.log(senderslocation)}
                        </div>

                    <li className ="list">To</li>
                        <div className='Order-form'>
                            <Form placeHolder='Enter Receivers Name' value={receiversname} onChange={(event) => setReceiversname(event.target.value)}/>
                             {console.log(receiversname)}
                             <Form placeHolder='Enter Receivers contact' value={receiverscontact} onChange={(event) => setReceiverscontact(event.target.value)}/>
                             {console.log(receiverscontact)}
                             <Form placeHolder='Enter Receivers Location' value={receiverslocation} onChange={(event) => setReceiverslocation(event.target.value)}/>
                             {console.log(receiverslocation)}
                        </div>
                    
                </ol>
            </form>
            <div className='button-container' >
            {/* <Link to = "/OrderPage"> */}
            <button type= 'reset' className='button' onClick = {post}>Create Order</button>
            {/* </Link>             */}
             </div>
        </div>
    )
}

export default MakeOrder
