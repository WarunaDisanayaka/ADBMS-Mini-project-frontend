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
                <div className='container p-4 mb-5 mx-auto mt-5 rounded bg-light shadow' style={{ width: 500 }}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} method='post'>
                        <h3 className='text-center mb-4'>Add Asset</h3>
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label className=''>Asset Name  </label>
                            </div>

                            <div className='col-6 mb-2 p-1'>

                                <Form.Select required name="assetname"
                                    // value={hostal}
                                    // onChange={(e) => setHostal(e.target.value)}
                                >
                                    <option disabled selected value="">select the asset..</option>
                                    <option value="a1">a1</option>
                                    <option value="a2">a2</option>
                                    <option value="a2">a3</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label className=''>Status</label>
                            </div>

                            <div className='col-6 mb-2 p-1'>
                                <Form.Select required name="status"
                                    // value={floor}
                                    // onChange={(e) => setFloor(e.target.value)}
                                >
                                    <option disabled selected value="">select the status..</option>
                                    <option value="1">S1</option>
                                    <option value="2">S2</option>
                                    <option value="3">S3</option>
                                    

                                </Form.Select>
                            </div>
                        </div>
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label  className=''>User ID</label>
                            </div>

                            <div className='col-6 mb-2 p-1'>

                                <Form.Select required name="userid"
                                    // value={roomType}
                                    // onChange={(e) => setRoomType(e.target.value)}
                                >
                                    <option disabled selected value="">select the room type</option>
                                    <option value="bedroom">Bedroom</option>
                                    <option value="washroom">Washroom</option>
                                    <option value="common">Common Room</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className='col-2 mb-2 p-1'>
                                <button type='submit' className="btn btn-outline-primary">Add</button>
                            </div>
                            <div className='col-3 mb-2 p-1'>
                                <button type='reset' className="btn btn-outline-secondary">Cancel</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default AddAssets;
