import React from 'react';
import { Link } from 'react-router-dom';

import './Profile.css';


 const Profile = () => {
    return (
        <div className="profile__card"> 
            <Link to = "/OrderPage"><i class="fas fa-arrow-left arrow"></i></Link>
            <div className="img__profile">
                <img src="../Images/profile.png" alt="profile" /> 
        </div>
 
        <div className="user__name">
                <input 
         className="input" type="text" placeholder="Name" 
          />
            </div>
            <div className="user__email">
                <input 
         className="input" type="text" placeholder="Email"  
          />
            </div>
            <div className = "lower-div">
           <Link to = "/Login"><button className="signin__button" type="button">Sign Out</button></Link>
            </div>
        <hr></hr>
            <div className = "lower-div">
            
            <Link to = "/"><span className="profile__accountLink">Add another account</span></Link>
        </div>
        </div>
    )
}

export default Profile;