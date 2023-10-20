import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className='form_container shadow p-5 mb-5  rounded bg-white'>
        <form >
          <h3 className='text-center'>Registration</h3>
          <div className='mb-2 p-1'>
            <label htmlFor='username' className='mb-2'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' />
          </div>
          <div className='mb-2 p-1'>
            <label htmlFor='username' className='mb-2'>Username</label>
            <input type='text' placeholder='Enter Username' className='form-control' />
          </div>
          <div className='mb-2 p-1'>
            <label htmlFor='password' className='mb-2'>Password</label>
            <input type='password' placeholder='Enter Password' className='form-control' />
          </div>
          <div className='mb-2 p-1'>
            <label htmlFor='password' className='mb-2'>Confirm Password</label>
            <input type='password' placeholder='Confirm Password' className='form-control' />
          </div>
          <div className="d-grid ">
            <button type='submit' className="btn btn-outline-primary mt-1">Register</button>
            <button type='button' className="btn btn-outline-secondary mt-2"><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Cancel</Link></button>
          </div>
         
        </form>
      </div>
    </div>
  )
}

export default Signup
