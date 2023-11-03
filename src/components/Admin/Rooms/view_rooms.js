import React from 'react';
import DataTable from './DataTable';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
  
const columns = [
    { label: 'Name', dataKey: 'name' },
    { label: 'Age', dataKey: 'age' },
    { label: 'Email', dataKey: 'email' },
    // Add more columns here...
];
  
const data = [
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
    // Add more data here...
];
  
const handleEditRow = (rowData) => {
    // Implement the logic to edit the row data
};
  
const handleViewRow = (rowData) => {
    // Implement the logic to view the row data
};
  
const handleDeleteRow = (rowData) => {
    // Implement the logic to delete the row data
};
  
const ViewRooms = () => {
    return (
        
      
        <div className='d-flex'>
            <div>
                <Sidebar/>
            </div>
            <div className='flex-grow-1'>
                <Topbar/>
                <div className="p-4">
                <DataTable
          columns={columns}
          data={data}
          onEditRow={handleEditRow}
          onViewRow={handleViewRow}
          onDeleteRow={handleDeleteRow}
        />
                </div>
            </div>
        </div>
        
      
    );
};
  
export default ViewRooms;