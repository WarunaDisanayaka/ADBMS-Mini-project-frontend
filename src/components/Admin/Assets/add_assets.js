import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { format } from 'date-fns';

function AddAssets() {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState([]);
    const [roomid, setRoomId] = useState([]);
    const [idlist, setIdList] = useState([]);
    const status = "in use";

    const [statuses] = useState([
        { type: 'success', message: 'Record created successfully!' },
        { type: 'error', message: 'Error creation failed.' },
      ]);

    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    const handleClick = (val) => {
        setValue1("");
        setValue2("");
        setValue3("");
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

    

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            event.preventDefault();

            const number1 = Math.floor(100 + Math.random() * 999);
            const number2 = Math.floor(100 + Math.random() * 999);
            const uniqueID = number1.toString() + number2.toString();

            const now = new Date();
            const date = format(now, 'yyyy-MM-dd');



            const formdata = {
                assetsId: uniqueID,
                name: name.value,
                status: status,
                roomId: roomid.value,
                addedDate: date
            };

            sendData(formdata);
            setName([]);
            setRoomId([]);
            setValidated(false);


        }


    };

    const handleReset = () => {
        setName([]);
        setRoomId([]);
        setValidated(false);
    };

    const sendData = (data) => {
        axios.post('http://3.229.95.193:8080/assets/', data)
            .then(response => {
                // Handle success
          
                
                notify(statuses[0].type,statuses[0].message);

            })
            .catch(error => {
                // Handle error
                notify(statuses[1].type,statuses[1].message);
            });
    };

    const notify = (type,msg) => {
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

    useEffect(() => {

        axios.get('http://3.229.95.193:8080/rooms/get-all-room-ids')
            .then(response => {
                // Handle success
                const formattedList = response.data.map(id => ({ value: id, label: id }));
                setIdList(formattedList);
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching room data:', error);
            });
        // console.log(idlist);
    }, []);

    const names = [
        { value: 'table', label: 'table' },
        { value: 'Chair', label: 'chair' },
        { value: 'light', label: 'Light' },
        { value: 'fan', label: 'Fan' },
        { value: 'clothrack', label: 'Cloth_rack' },
        { value: 'cupboard', label: 'Cupboard' },
        { value: 'bench', label: 'Bench' },

    ];
    // const state = [
    //     { value: 'in use', label: 'In use' },
    //     { value: 'under maintenance', label: 'Under maintenance' },
    //     { value: 'out of service', label: 'Out of service' },

    // ];

    return (
        <div className='d-flex'>
            <div>
                <Sidebar />
            </div>
            <div className='flex-grow-1'>
<<<<<<< HEAD
                <Topbar/>
                <div className='container p-4 mb-5 mx-auto mt-5 rounded bg-light shadow' style={{ width: 500 }}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} method='get'>
=======
                <Topbar />
                <div className='container p-4 mb-5 mx-auto mt-5 rounded bg-light shadow-sm' style={{ width: 500 }}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} method='post'>
>>>>>>> parent of 255123a (aaa no)
                        <h3 className='text-center mb-4'>Add Asset</h3>
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label className=''>Asset Name  </label>
                            </div>

                            <div className='col-6 mb-2 p-1'>
<<<<<<< HEAD

                                <Form.Select required name="assetname" onChange={handleChange1} value={value1}
                                    // value={hostal}
                                    // onChange={(e) => setHostal(e.target.value)}
                                >
                                    <option disabled selected value="">select the asset..</option>
                                    <option value="a1">a1</option>
                                    <option value="a2">a2</option>
                                    <option value="a2">a3</option>
                                </Form.Select>
=======
                                <Select
                                    isSearchable={false}
                                    required
                                    options={names}
                                    value={name}
                                    onChange={setName}
                                />
                                {validated && name.length === 0 && (
                                    <div className="invalid-feedback d-block">
                                        Please select an option.
                                    </div>
                                )}
>>>>>>> parent of 255123a (aaa no)
                            </div>
                        </div>

                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label className=''>Room ID</label>
                            </div>
                            <div className='col-6 mb-2 p-1'>
<<<<<<< HEAD
                                <Form.Select required name="status" onChange={handleChange2} value={value2}
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

                                <Form.Select required name="userid" onChange={handleChange3} value={value3}
                                    // value={roomType}
                                    // onChange={(e) => setRoomType(e.target.value)}
                                >
                                    <option disabled selected value="">select the room type</option>
                                    <option value="bedroom">Bedroom</option>
                                    <option value="washroom">Washroom</option>
                                    <option value="common">Common Room</option>
                                </Form.Select>
=======
                                <Select

                                    required
                                    options={idlist}
                                    value={roomid}
                                    onChange={setRoomId}
                                />
                                {validated && roomid.length === 0 && (
                                    <div className="invalid-feedback d-block">
                                        Please select an option.
                                    </div>
                                )}
>>>>>>> parent of 255123a (aaa no)
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className='col-2 mb-2 p-1'>
                                <button type='submit' className="btn btn-outline-primary">Add</button>
                            </div>
                            <div className='col-3 mb-2 p-1'>
<<<<<<< HEAD
                                <button onClick={handleClick} className="btn btn-outline-secondary">Clear</button>
=======
                                <button type='reset' className="btn btn-outline-secondary" onClick={handleReset}>Cancel</button>
>>>>>>> parent of 255123a (aaa no)
                            </div>
                        </div>
                    </Form>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default AddAssets;
