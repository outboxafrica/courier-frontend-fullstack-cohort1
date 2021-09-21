import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import './index.css'
import Profile from './Components/ProfilePage/Profile';
import CreateOrder from './Components/CreateOrder'
import Order from './Components/Orders'
import Form from './Components/Form';
import Signin from './Components/Signin';


function App() {
  return (
    <Router>
    <div className="App"> 

      <Switch>

        <Route exact path ="/">
        <Form />
        </Route>

        <Route path ="/Login">
        <Signin/>
        </Route>

        <Route path ="/OrderPage">
        <Order/>
        </Route>

        <Route path ="/CreateOrder">
        <CreateOrder/>
        </Route>

        <Route path ="/Profile">
        <Profile/> 
        </Route>
        
      </Switch>
     
    </div>
    </Router>
  );
  
}

export default App;


 
