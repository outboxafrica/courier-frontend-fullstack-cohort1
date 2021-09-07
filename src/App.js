import React from 'react';

import Profile from './Components/ProfilePage/Profile';
import './index.css'
import CreateOrder from './Components/CreateOrder'
import Order from './Components/Orders'

import './App.css';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <CreateOrder/>
      <Order/>
      <Profile/>
      <Form />
    </div>
  );
}

export default App;


 
