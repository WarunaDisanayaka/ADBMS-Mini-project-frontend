import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router';


function EditAssets() {
    const names = [
        { value: 'table', label: 'table' },
        { value: 'Chair', label: 'chair' },
        { value: 'light', label: 'Light' },
        { value: 'fan', label: 'Fan' },
        { value: 'clothrack', label: 'Cloth_rack' },
        { value: 'cupboard', label: 'Cupboard' },
        { value: 'bench', label: 'Bench' },

    ];


    const location = useLocation();
    const props = location.state;


    const [validated, setValidated] = useState(false);
    const [name, setName] = useState([]);
    const [roomid, setRoomId] = useState([]);
    const [idlist, setIdList] = useState([]);

    const getLabelFromValue = (value, array) => {
        const foundItem = array.find(item => item.value === value);
        return foundItem ? foundItem : null;
    };



    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            event.preventDefault();


            const formdata = {
                name: name.value,
                roomId: roomid.value,
            };


            updateData(props.assetsId, formdata);
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

    const updateData = (id, data) => {
        axios.put(`http://3.229.95.193:8080/assets/${id}`, data)
            .then(response => {
                // Handle success
                // console.log(response);
                notify();

            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    };

    const notify = () => {
        toast.success('Record Updated successfully!', {
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
                const formattedListData = response.data.map(id => ({ value: id, label: id }));
                setIdList(formattedListData);
                setRoomId(getLabelFromValue(props.roomId, formattedListData));
            })
            .catch(error => {
                // Handle error
                console.error('Error fetching room data:', error);
            });
        setName(getLabelFromValue(props.name, names));
    }, [props.name]);

    const setRoom = () => {
        setRoomId(getLabelFromValue(props.roomId, idlist));
    };


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
                                {validated && name.length === 0 && (
                                    <div className="invalid-feedback d-block">
                                        Please select an option.
                                    </div>
                                )}
                            </div>
                        </div>

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
                                {validated && roomid.length === 0 && (
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
                                <button type='reset' className="btn btn-outline-secondary" onClick={handleReset}>Cancel</button>
                            </div>
                        </div>
                    </Form>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default EditAssets;
