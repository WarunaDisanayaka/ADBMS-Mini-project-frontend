import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import { Form } from 'react-bootstrap';

function AddUsers() {
  const [validated, setValidated] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");

  const handleClick = () => {
    setValue1("");
    setValue2("");
    setValue3("");
    setValue4("");
    setValue5("");
  };

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };

  const handleChange5 = (event) => {
    setValue5(event.target.value);
  };

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      try {
        const response = await axios.post('/api/users', {
          username: value1,
          fullrname: value2,
          regno: value3,
          password: value4,
          role_id: value5,
        });

        if (response.status === 201) {
          console.log('User added successfully');
          handleClick(); // Clear form values
        } else {
          console.error('Failed to add user');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
    setValidated(true);
  };

  return (
    <div className='d-flex'>
      <div>
        <Sidebar />
      </div>
      <div className='flex-grow-1'>
        <Topbar />

        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-light">
          <div className='form_container shadow p-5 mb-5 rounded bg-white'>
            <Form noValidate validated={validated} onSubmit={handleSubmit} method=''>
              <h3 className='text-center'>Add User</h3>
              <div className='mb-2 p-1'>
                <label htmlFor='username' className='mb-2'>User name</label>
                <Form.Control type='text' placeholder='Username' className='form-control' onChange={handleChange1} value={value1} required />
              </div>
              <div className='mb-2 p-1'>
                <label htmlFor='fullname' className='mb-2'>Full name</label>
                <Form.Control type='text' placeholder='Enter Fullname' className='form-control' onChange={handleChange2} value={value2} required />
              </div>
              <div className='mb-2 p-1'>
                <label htmlFor='regno' className='mb-2'>Register Number</label>
                <Form.Control type='text' placeholder='Enter Register Number' className='form-control' onChange={handleChange3} value={value3} required />
              </div>
              <div className='mb-2 p-1'>
                <label htmlFor='password' className='mb-2'>Password</label>
                <Form.Control type='password' placeholder='Password' className='form-control' onChange={handleChange4} value={value4} required />
              </div>
              <div className='mb-2 p-1'>
                <label htmlFor='role_id' className='mb-2'>Role ID</label>
                <Form.Select required className="roleId" onChange={handleChange5} value={value5}>
                  <option disabled selected value="">Role ID...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
              <div className="d-grid ">
                <button type='submit' className="btn btn-outline-primary">Add</button>
                <button onClick={handleClick} type='button' className="btn btn-outline-secondary mt-2">Clear</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUsers;
