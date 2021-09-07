import React from 'react';

import Profile from './Components/ProfilePage/Profile';
import './index.css'
import CreateOrder from './Components/CreateOrder'
import Order from './Components/Orders'

function App() {
  return (
    <div className="App">
      <CreateOrder/>
      <Order/>
      <Profile/>
    </div>
  );
}

export default App;


 