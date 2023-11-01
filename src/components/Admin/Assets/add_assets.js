import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import { Form } from 'react-bootstrap';

function AddAssets() {
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
                <div className='container p-3 mb-5 mx-auto mt-5 rounded bg-light shadow' style={{width:400}}>

                    <Form noValidate validated={validated} onSubmit={handleSubmit}>

                            <h3 className='text-center'>Add Assets</h3>
                                <div className="mb-3 mt-3">
                                    <label htmlFor='assetsId' className='form-label'>Assets ID: </label>
                                    <div className="col-sm-10">
                                        <Form.Control type='text' className='form-control' id='assetsId' name='assetsId' required/>
                                    </div>
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor='name' className='form-label'>Assets Name: </label>
                                    <div className="col-sm-10">
                                        <Form.Control input type='text' className='form-control' id='name' name='name'required/>
                                    </div>
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor='status' className='form-label'>Status: </label>
                                    <div className="col-sm-10">
                                        <Form.Select className='mt-3' required >
                                            <option disabled selected value="">please select...</option>
                                            <option value='in use'>In Use</option>
                                            <option value='on repair'>On Repair</option>
                                            <option value='out of use'>Out of use</option>
                                        </Form.Select>
                                    </div>
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor='room number' className='form-label'>Room Number: </label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="clear" className="btn btn-secondary mx-3" >Clear</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default AddAssets;
