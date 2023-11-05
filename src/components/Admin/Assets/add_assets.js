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
    const [roomid,setRoomId] = useState([]);
    const [idlist,setIdList] = useState([]);
    const status = "in use";



    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            event.preventDefault();
            const number1= Math.floor(100 + Math.random() * 999);
            const number2= Math.floor(100 + Math.random() * 999);
            const uniqueID = number1.toString() + number2.toString();

            const now = new Date();
            const date = format(now, 'yyyy-MM-dd');
         

            
            const formdata = {
                assetsId : uniqueID,
                name : name.value,
                status : status,
                roomId : roomid.value,
                addedDate : date
            };

            sendData(formdata);
            


        }
        setValidated(true);
        
    };

    const sendData = (data) => {
        axios.post('http://3.229.95.193:8080/assets/', data)
            .then(response => {
                // Handle success
                console.log(response);
                notify();

            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    };

    const notify = () => {
        toast.success('Record created successfully!', {
            position: "top-right",
            autoClose: 4000,
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
    },[]);

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
                <Topbar />
                <div className='container p-4 mb-5 mx-auto mt-5 rounded bg-light shadow-sm' style={{ width: 500 }}>
                    <Form noValidate validated={validated} onSubmit={handleSubmit} method='post'>
                        <h3 className='text-center mb-4'>Add Asset</h3>
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label className=''>Asset Name  </label>
                            </div>

                            <div className='col-6 mb-2 p-1'>
                                <Select
                                    isSearchable={false}
                                    required
                                    options={names}
                                    value={name}
                                    onChange={setName}
                                />
                                {validated && !name && (
                                    <div className="invalid-feedback d-block">
                                        Please select an option.
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label className=''>Status</label>
                            </div>

                            <div className='col-6 mb-2 p-1'>
                                <Select
                                    isSearchable={false}
                                    required
                                    options={state}
                                    value={status}
                                    onChange={setStatus}
                                />
                                {validated && !status && (
                                    <div className="invalid-feedback d-block">
                                        Please select an option.
                                    </div>
                                )}
                            </div>
                        </div> */}
                        <div className='row justify-content-md-center'>
                            <div className="col-4 mb-2 p-1">
                                <label className=''>Room ID</label>
                            </div>
                            <div className='col-6 mb-2 p-1'>
                                <Select
                                    
                                    required
                                    options={idlist}
                                    value={roomid}
                                    onChange={setRoomId}
                                />
                                {validated && !roomid && (
                                    <div className="invalid-feedback d-block">
                                        Please select an option.
                                    </div>
                                )}
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
            <ToastContainer />
        </div>
    );
}

export default AddAssets;
