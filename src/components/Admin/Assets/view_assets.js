import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import AssetTable from './asset_table';
import axios from 'axios';
import { toast } from 'react-toastify';


function ViewAssets() {
    const columns = [
        { label: 'Asset ID', dataKey: 'assetsId' },
        { label: 'Asset Name', dataKey: 'name' },
        { label: 'Asset Status', dataKey: 'status' },
        { label: 'Room ID', dataKey: 'roomId' },
        { label: 'Added Date', dataKey: 'addedDate' },
        { label: 'QR Code', dataKey: '' },

    ];


    const [assetdata, setAssetData] = useState([]);

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
        axios.get('http://3.229.95.193:8080/assets/')
            .then(response => {
                // Handle success
                setAssetData(response.data);

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
                    <AssetTable
                        columns={columns}
                        data={assetdata}
                    />
                </div>
            </div>
        </div>
    );
}



export default ViewAssets;
