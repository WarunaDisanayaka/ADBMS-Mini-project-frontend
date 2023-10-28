import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';

function AddRooms() {

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
        <div className='d-flex '>
            <div>
                <Sidebar />
            </div>
            <div className='flex-grow-1'>
                <Topbar />

                <div className='container p-5 mb-5 mx-auto mt-5 rounded bg-light shadow' style={{ width: 600 }}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} method='get'>
                        <h3 className='text-center mb-4'>Register a Room</h3>
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label htmlFor='username' className=''>Hostel  </label>
                            </div>

                            <div className='col-6 mb-2 p-1'>

                                <Form.Select required>
                                    <option disabled selected value="">select the Hostel</option>
                                    <option value="g">Girl's hostel</option>
                                    <option value="b">Boy's hostel</option>

                                </Form.Select>
                            </div>
                        </div>
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label htmlFor='username' className=''>Floor</label>
                            </div>

                            <div className='col-6 mb-2 p-1'>
                                <Form.Select required>
                                    <option disabled selected value="">select the Floor</option>
                                    <option value="0">Ground Floor</option>
                                    <option value="1">First Floor</option>
                                    <option value="2">Second Floor</option>
                                    <option value="3">Third Floor</option>

                                </Form.Select>
                            </div>
                        </div>
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label htmlFor='username' className=''>Room Type</label>
                            </div>

                            <div className='col-6 mb-2 p-1'>

                                <Form.Select required>
                                    <option disabled selected value="">select the room type</option>
                                    <option value="0">Bedroom</option>
                                    <option value="1">Washroom</option>
                                    <option value="2">Common Room</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label htmlFor='username' className=''>Room Number </label>
                            </div>

                            <div className='col-6 mb-2 p-1'>

                                <input type='number' placeholder='Enter Room Number' className='form-control' required/>
                                <Form.Control.Feedback type="invalid">
                                    Room number is required!
                                </Form.Control.Feedback>
                            </div>
                        </div>
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label htmlFor='username' className=''>Number of Students </label>
                            </div>

                            <div className='col-6 mb-2 p-1'>

                                <input type='number' placeholder='Enter Number of Students' className='form-control' required/>
                                <Form.Control.Feedback type="invalid">
                                    number of students are required!
                                </Form.Control.Feedback>
                            </div>
                        </div>

                        <div className="row justify-content-end">
                            <div className='col-2 mb-2 p-1'>
                                <button type='submit' className="btn btn-outline-primary">Register</button>
                            </div>
                            <div className='col-3 mb-2 p-1'>
                                <button type='submit' className="btn btn-outline-secondary">Cancel</button>
                            </div>
                        </div>
                    </Form>
                </div>


            </div>
        </div>
    );
}

export default AddRooms;
