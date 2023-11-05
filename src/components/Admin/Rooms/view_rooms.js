import React, { useEffect, useState } from 'react';
import DataTable from './DataTable';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import axios from 'axios';
import { toast } from 'react-toastify';




const ViewRooms = () => {
    const columns = [
        { label: 'Room ID', dataKey: 'roomId' },
        { label: 'Room Number', dataKey: 'roomNo' },
        { label: 'Hostal', dataKey: 'hostal' },
        { label: 'Floor', dataKey: 'floor' },
        { label: 'Room Type', dataKey: 'roomType' },

    ];
    const [roomdata, setRoomData] = useState([]);

    const notify = () => {
        toast.error("Error occurred.", {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      };

    useEffect(() => {
        // Fetch data from the API
        axios.get('http://3.229.95.193:8080/rooms/get-all-rooms')
            .then(response => {
                // Handle success
                setRoomData(response.data);
                //console.log(data);
            })
            .catch(error => {
                // Handle error
                notify();
            });
    }, []);


    return (


        <div className='d-flex'>
            <div>
                <Sidebar />
            </div>
            <div className='flex-grow-1'>
                <Topbar />
                <div className="p-4">
                    <DataTable
                        columns={columns}
                        data={roomdata}

                    />
                </div>
            </div>
        </div>


    );
};

export default ViewRooms;