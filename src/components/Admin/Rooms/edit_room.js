import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { useLocation } from 'react-router';

function EditRooms() {

    const location = useLocation();
    const props = location.state;

    console.log(props);

    const [validated, setValidated] = useState(false);
    const [hostal, setHostal] = useState(props.hostal || '');
    const [floor, setFloor] = useState(props.floor || '');
    const [roomType, setRoomType] = useState(props.roomType || '');
    const [roomno,setRoomNo] = useState(props.roomNo || '');

    

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            event.preventDefault();

            const formData = new FormData(form);
            const roomId = formData.get('hostal') + formData.get('roomNo');

            const jsonData = {
                roomId: roomId,
                roomNo: formData.get('roomNo'),
                hostal: formData.get('hostal'),
                floor: formData.get('floor'),
                roomType: formData.get('roomType')
            };
            console.log(jsonData);
            // sendData(jsonData);

            setValidated(false);
            form.reset();
            setHostal('');
            setFloor('');
            setRoomType('');
        }



    };

 

    const sendData = (data) => {
        axios.post('http://3.229.95.193:8080/rooms/create-room', data)
            .then(response => {
                // Handle success

                console.log(response);
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    };


    return (
        <div className='d-flex '>
            <div>
                <Sidebar />
            </div>
            <div className='flex-grow-1'>
                <Topbar />

                <div className='container p-5 mb-5 mx-auto mt-5 rounded bg-light shadow' style={{ width: 600 }}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} method='post'>
                        <h3 className='text-center mb-4'>Register a Room</h3>
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label htmlFor='username' className=''>Hostel  </label>
                            </div>

                            <div className='col-6 mb-2 p-1'>

                                <Form.Select required name="hostal"
                                    value={hostal}
                                    onChange={(e) => setHostal(e.target.value)}
                                >
                                    <option disabled selected={hostal} value="">select the Hostel</option>
                                    <option value="G">Girl's hostel</option>
                                    <option value="B">Boy's hostel</option>

                                </Form.Select>
                            </div>
                        </div>
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label htmlFor='username' className=''>Floor</label>
                            </div>

                            <div className='col-6 mb-2 p-1'>
                                <Form.Select required name="floor"
                                    value={floor}
                                    onChange={(e) => setFloor(e.target.value)}
                                >
                                    <option disabled selected value="">select the Floor</option>
                                    <option value="1">Ground Floor</option>
                                    <option value="2">First Floor</option>
                                    <option value="3">Second Floor</option>
                                    <option value="4">Third Floor</option>

                                </Form.Select>
                            </div>
                        </div>
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label htmlFor='username' className=''>Room Type</label>
                            </div>

                            <div className='col-6 mb-2 p-1'>

                                <Form.Select required name="roomType"
                                    value={roomType}
                                    onChange={(e) => setRoomType(e.target.value)}
                                >
                                    <option disabled selected value="">select the room type</option>
                                    <option value="bedroom">Bedroom</option>
                                    <option value="washroom">Washroom</option>
                                    <option value="common">Common Room</option>
                                </Form.Select>
                            </div>
                        </div>
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label htmlFor='username' className=''>Room Number </label>
                            </div>

                            <div className='col-6 mb-2 p-1'>

                                <input type='number' name='roomNo' placeholder='Enter Room Number' className='form-control' value={roomno} required />
                                <Form.Control.Feedback type="invalid">
                                    Room number is required!
                                </Form.Control.Feedback>
                            </div>
                        </div>

                        <div className="row justify-content-end">
                            <div className='col-2 mb-2 p-1'>
                                <button type='submit' className="btn btn-outline-primary">Update</button>
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

export default EditRooms;
