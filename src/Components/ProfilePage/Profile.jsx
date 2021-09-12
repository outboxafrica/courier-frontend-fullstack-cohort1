import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from "../../ContextApi/StateProvider";
import './Profile.css';
import { storage } from '../Storage';
import { useHistory } from "react-router-dom";

 const Profile = () => {
    // const [{ user ,email }] = useStateValue();
    const history = useHistory();

    function removeLocalStorage (e){
        e.preventDefault()
        localStorage.removeItem("userName")
        localStorage.removeItem("email")
        history.push("/")
    }
    return (
        
        <div className="profile__card"> 
            <Link to = "/OrderPage"><i class="fas fa-arrow-left arrow"></i></Link>
            <div className="img__profile">
                <img src="../Images/profile.png" alt="profile" /> 
        </div>
 
        <div className="user__name">
                {/* <input 
         className="input" type="text" placeholder="Name" 
          /> */}
          <div className="input" >
              {/* {localStorage.getItem('userName')} */}
          {storage.name}
          </div>
            </div>
            <div className="user__email">
                {/* <input 
         className="input" type="text" placeholder="Email"  
          /> */}
          <div className="input" >
          {storage.email}
          </div>
            </div>
            <div className = "lower-div">
           <Link to = "/Login"><button className="signin__button" type="button" onClick={removeLocalStorage}>Sign Out</button></Link>
            </div>
        <hr></hr>
            <div className = "lower-div">
            
            <Link to = "/"><span className="profile__accountLink">Add another account</span></Link>
        </div>
        </div>
    )
}

export default Profile;