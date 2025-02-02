import React from 'react'
import './Signup.css';
import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <div className='addUser'>
      <h3>Sign Up</h3>
      <form className='addUserForm'>
      <div className='inputGroup'>
        <label htmlFor="name">Name:</label>
        <input type="text" id='name' autoComplete='off' placeholder='Enter your name' />
        
        <label htmlFor="email">Email:</label>
        <input type="text" id='name' autoComplete='off' placeholder='Enter your email' />
        
        <label htmlFor="name">Pasward:</label>
        <input type="password" id='name' autoComplete='off' placeholder='Enter your password' />

        <button type='submit' className='btn btn-success '>Sign Up</button>
        
      </div>
      </form>
      
      <div className='login'>
        <p>Alredy have an account?</p>
        <Link to="/login" type='submit' className='btn btn-primary '>Log In</Link>

      </div>
    </div>
  )
}

export default Signup
