import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import axios from 'axios';
import { toast } from 'react-toastify';
import MaintenanceTable from './maintanance_table';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


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
        axios.get('http://3.229.95.193:8080/maintainance')
            .then(response => {
                // Handle success
                setUserData(response.data);

            })
            .catch(error => {
                // Handle error
                notify();
            });
    }, []);

    const generatePDF = () => {
        const result = userdata.map(item => [
            item.assetsId,
            item.status,
            item.date,
            item.evidenceImage
        ]);

        const doc = new jsPDF();
        doc.text('Maintenance Report', 10, 10);
        doc.autoTable({
            head: [['Asset ID', 'Status', 'Date', 'Image Link']],
            body: result,
            columnStyles: {
                0: { cellWidth: 30 },
                1: { cellWidth: 30 }, 
                2: { cellWidth: 30 }, 
                3: { cellWidth: 80 }, 
              },
        });
        doc.save('Maintenance_Report.pdf');
    };


    return (
        <div className='d-flex'>
            <div>
                <Sidebar />
            </div>
            <div className='flex-grow-1'>
                <Topbar />
                <div className="p-4">
                    <button className='btn btn-outline-primary' onClick={generatePDF}>Download PDF</button>
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



