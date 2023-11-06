import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import MaintenanceTable from './maintanance_table';


function ViewMaintenance() {
    const columns = [
        { label: 'Asset ID', dataKey: 'assetsId' },
        { label: 'Status', dataKey: 'status' },
        { label: 'Date', dataKey: 'date' },
        { label: 'Image', dataKey: 'evidenceImage' }
        
        

    ];


    const [userdata, setUserData] = useState([]);

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
        axios.get('http://3.229.95.193:8080/users/get-users')
            .then(response => {
                // Handle success
                setUserData(response.data);

            })
            .catch(error => {
                // Handle error
              notify();
            });
    }, []);



    return (
        <div className='d-flex'>
            <div>
                <Sidebar/>
            </div>
            <div className='flex-grow-1'>
                <Topbar/>
                <div className="p-4">
                    <MaintenanceTable
                        columns={columns}
                        data={userdata}
                    />
                </div>
            </div>
        </div>
    );
}



export default ViewMaintenance;



