import React from 'react'
import './LogIn.css';
import { Link } from 'react-router-dom';
const LogIn = () => {
  return (
    <div className='addUser'>
      <h3>Sign In</h3>
      <form className='addUserForm'>
      <div className='inputGroup'>
        <label htmlFor="email">Email:</label>
        <input type="text" id='name' autoComplete='off' placeholder='Enter your email' />
        
        <label htmlFor="name">Pasward:</label>
        <input type="password" id='name' autoComplete='off' placeholder='Enter your password' />

        <button type='submit' className='btn btn-primary '>Sign In</button>
        
      </div>
      </form>
      
      <div className='login'>
        <p>Don't have Account?</p>
        <Link to="/" type='submit' className='btn btn-primary '>Sign Up</Link>

      </div>
    </div>
  )
}

export default LogIn
