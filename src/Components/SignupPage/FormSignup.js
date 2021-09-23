import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { Link } from 'react-router-dom';

const FormSignup = ({ submitForm }) => {
  const addUser = () => {
    
    localStorage.setItem("username", values.username);
    localStorage.setItem("email", values.email);

  };

  const { handleChange, handleSubmit, values, errors, isLoading, resError} = useForm(
    submitForm,
    validate
  );

  

  return (
    <div className='form-content-right'>
      
      <form onSubmit={handleSubmit} className='form' noValidate>
      <a href="home"><h1>Safe Courier</h1></a>
        <h2>
        We help users deliver parcels to different  destinations & provides courier quotes based on weight categories
        </h2>

        {/* Display error from api */}
        <p style={resError?{display:'block', border:'2px solid red', fontFamily:'monospace', padding:'10px', width:'100%', margin:'10px', textAlign:'center'}:{display:'none'}}>{resError}</p>
      
        {/* username input */}
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text' 
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
            
            />
          {errors.username && <p>{errors.username}</p>}
        </div>

            {/* email input */}
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

            {/* password input */}
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

            {/* password2 input */}
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          /> 
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <button className='form-input-btn' type='submit' onClick={addUser} >{ isLoading ? 'Loading . . .' : 'Sign Up'}</button>

        {/* footer */}
        <span className='form-input-login'>
          Already have an account? Login <Link to='./Login'>here</Link>
        </span>
        
      </form>
    </div>
  );
};

export default FormSignup;
