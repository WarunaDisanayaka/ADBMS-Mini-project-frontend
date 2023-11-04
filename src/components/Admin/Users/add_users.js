import React from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';

function AddUsers() {
    return (
        <div className='d-flex'>
            <div>
                <Sidebar/>
            </div>
            <div className='flex-grow-1'>
                <Topbar/>
                <div className="p-4">
                    
                </div>
            </div>
        </div>
    );
}

export default AddUsers;
