import React from 'react'
import './style/form.css';
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className='form_container shadow p-5 mb-5  rounded bg-white'>
        <form>
          <h3 className='text-center'>Sign in</h3>
          <div className='mb-2 p-1'>
            <label htmlFor='username' className='mb-2'>Username</label>
            <input type='text' placeholder='Enter Username' className='form-control' />
          </div>
          <div className='mb-2 p-1'>
            <label htmlFor='password' className='mb-2'>Password</label>
            <input type='password' placeholder='Enter Password' className='form-control' />
          </div>
          <div className="mb-2 p-1">
            <input type="checkbox" className="custom-control custom-checkbox" id='check' />
            <label htmlFor="" className="custom-input-label">Remember me</label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-end mt-2">Forgot <a href="#">password?</a><Link to="" className='ms-2'>Sign up</Link></p>
        </form>
      </div>
    </div>
  )
}

