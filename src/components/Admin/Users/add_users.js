import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import { Form } from 'react-bootstrap';

function AddUsers() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <div className='d-flex'>
            <div>
                <Sidebar/>
            </div>
            <div className='flex-grow-1'>
                <Topbar/>

                <div className="login template d-flex justify-content-center align-items-center vh-100 bg-light">
                    <div className='form_container shadow p-5 mb-5  rounded bg-white'>
                        <Form noValidate validated={validated} onSubmit={handleSubmit} method=''> 
                        <h3 className='text-center'>Add User</h3>
                        <div className='mb-2 p-1'>
                            <label htmlFor='username' className='mb-2'>User name</label>
                            <input type='text' placeholder='Username' className='form-control' />
                        </div>
                        <div className='mb-2 p-1'>
                            <label htmlFor='fullrname' className='mb-2'>Full_rname</label>
                            <input type='text' placeholder='Enter Fullrname' className='form-control' />
                        </div>
                        <div className='mb-2 p-1'>
                            <label htmlFor='regno' className='mb-2'>Register Number</label>
                            <input type='text' placeholder='Enter Register Number' className='form-control' />
                        </div>
                        <div className='mb-2 p-1'>
                            <label htmlFor='password' className='mb-2'>Password</label>
                            <input type='password' placeholder='Password' className='form-control' />
                        </div>
                            <div className='mb-2 p-1'>
                                <label htmlFor='role_id' className='mb-2'>Role ID</label>
                                    <Form.Select className="mb-2" aria-label="Default select example">
                                        <option selected>Role ID...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                            </div>
                        <div className="d-grid ">
                                <button type='submit' className="btn btn-outline-primary">Add</button>
                            <button type='button' className="btn btn-outline-secondary mt-2">Clear</button>
                        </div>
                        
                        </Form>
                    </div>
                    </div>
            </div>
        </div>
    );
}

export default AddUsers;
