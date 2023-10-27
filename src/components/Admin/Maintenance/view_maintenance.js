import React from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';

function ViewMaintenance() {
    return (
        <div className='d-flex'>
            <div>
                <Sidebar/>
            </div>
            <div className='flex-grow-1'>
                <Topbar/>
                <div className="p-4">
                    <h2>View Maintenance Page</h2>
                    <p>This is the View Maintenance page content. You can add your content here.</p>
                </div>
            </div>
        </div>
    );
}

export default ViewMaintenance;
