import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import DataTable from '../Rooms/DataTable';
import AssetTable from './asset_table';
import axios from 'axios';

function ViewAssets() {
    const columns = [
        { label: 'Asset ID', dataKey: 'assetsId' },
        { label: 'Asset Name', dataKey: 'name' },
        { label: 'Asset Status', dataKey: 'status' },
        { label: 'Room ID', dataKey: 'roomId' },
        { label: 'Added Date', dataKey: 'addedDate' },
        { label: 'QR Code', dataKey: 'qrCodePath' },

    ];

    const [assetdata, setAssetData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        axios.get('http://3.229.95.193:8080/assets/')
            .then(response => {
                // Handle success
                setAssetData(response.data);

            })
            .catch(error => {
                // Handle error
                console.error('Error fetching room data:', error);
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
