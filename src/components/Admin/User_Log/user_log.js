import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import UserlogData from './userlog_table';


function UserLog() {
    const columns = [
        { label: 'User Name', dataKey: 'username' },
        { label: 'Login Time', dataKey: 'login_time' },
    ];


    const [userdata, setUserData] = useState([]);

    const notify = () => {
        toast.error("Error occurred while fetching.", {
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
        axios.get('http://3.229.95.193:8080/login-logs')
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
                <Sidebar />
            </div>
            <div className='flex-grow-1'>
                <Topbar />
                <div className="p-4">
                    <UserlogData
                        columns={columns}
                        data={userdata}
                    />
                </div>
            </div>
        </div>
    );
}



export default UserLog;



