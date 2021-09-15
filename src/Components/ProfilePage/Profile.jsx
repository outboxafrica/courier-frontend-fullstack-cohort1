import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import { storage } from '../Storage';
import { useHistory } from "react-router-dom";

const Profile = () => {
    const history = useHistory();

    function removeLocalStorage(e) {
        e.preventDefault()
        localStorage.removeItem("userName")
        localStorage.removeItem("email")
        history.push("/")
    }
    return (

        <div className="profile__card">
            <Link to="/OrderPage"><i class="fas fa-arrow-left arrow"></i></Link>
            <div className="img__profile">
                <img src="../Images/profile.png" alt="profile" />
            </div>
            
        {/* Username Display */}
            <div className="user__name">
                <div className="input" >
                    {storage.name}
                </div>
            </div>

        {/* Email Display */}
            <div className="user__email">
                <div className="input" >
                    {storage.email}
                </div>
            </div>

            <div className="lower-div">
                <Link to="/Login"><button className="signin__button" type="button" onClick={removeLocalStorage}>Sign Out</button></Link>
            </div>
            <hr></hr>
            <div className="lower-div">

                <Link to="/"><span className="profile__accountLink">Add another account</span></Link>
            </div>
        </div>
    )
}

export default Profile;