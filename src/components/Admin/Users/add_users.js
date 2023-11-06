import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { auto } from '@popperjs/core';

function AddUsers() {
  const [validated, setValidated] = useState(false);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");

  const [statuses] = useState([
    { type: 'success', message: 'Record created successfully!' },
    { type: 'error', message: 'Error creation failed.' },
  ]);

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
      setValidated(true);
    } else {
      event.preventDefault();
      const formdata = {
        username: value1,
        fullName: value2,
        regNo: value3,
        password: value4,
        roleId: value5
      }
      sendData(formdata);
      handleClick();
      setValidated();
    }
  };

  const notify = (type, msg) => {
    toast[type](msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const sendData = (data) => {
    axios.post('http://3.229.95.193:8080/users/', data)
      .then(response => {
        // Handle success
        notify(statuses[0].type, statuses[0].message);
      })
      .catch(error => {
        // Handle error
        notify(statuses[1].type, statuses[1].message);
      });
  };

  return (
    <div className='d-flex'>
      <div>
        <Sidebar />
      </div>
      <div className='flex-grow-1'>
        <Topbar />
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-light">
          <div className='form_container shadow p-5 mb-2 rounded bg-white'>
            <Form noValidate validated={validated} onSubmit={handleSubmit} method='post'>
              <h3 className='text-center'>Add User</h3>
              <div className='mb-1 p-1'>
                <label htmlFor='username' className='mb-1'>User name</label>
                <Form.Control type='text' placeholder='Username' className='form-control' onChange={handleChange1} value={value1} required />
              </div>
              <div className='mb-1 p-1'>
                <label htmlFor='fullname' className='mb-1'>Full name</label>
                <Form.Control type='text' placeholder='Enter Fullname' className='form-control' onChange={handleChange2} value={value2} required />
              </div>
              <div className='mb-1 p-1'>
                <label htmlFor='regno' className='mb-1'>Registration Number</label>
                <Form.Control type='text' placeholder='Enter Registration Number' className='form-control' onChange={handleChange3} value={value3} required />
              </div>
              <div className='mb-1 p-1'>
                <label htmlFor='password' className='mb-1'>Password</label>
                <Form.Control type='password' placeholder='Password' className='form-control' onChange={handleChange4} value={value4} required />
              </div>
              <div className='mb-1 p-1'>
                <label htmlFor='role_id' className='mb-1'>Role</label>
                <Form.Select required className="roleId" onChange={handleChange5} value={value5}>
                  <option disabled selected value="">Select role...</option>
                  <option value="1">Student</option>
                  <option value="2">Warden</option>
                  <option value="3">Sub-Warden</option>
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
      <ToastContainer/>
    </div>
  );
}

export default AddUsers;
