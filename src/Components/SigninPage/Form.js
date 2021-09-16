import React, { useState } from 'react';
import './Form.css';
import FormSignin from './FormSignin';
import {Link, Redirect} from 'react-router-dom'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src='https://res.cloudinary.com/awesomeone-maria/image/upload/v1630576322/capstone%20Project/undraw_On_the_way_re_swjt_hdb4wy.svg' alt='back' />
        </div>
        {!isSubmitted ? (
          <FormSignin submitForm={submitForm} /> 
        ) : (

          <Link to="/OrderPage"><Redirect to='/OrderPage' /></Link>

        )}
      </div>

  );
};

export default Form;