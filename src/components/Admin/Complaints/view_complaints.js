import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function ViewComplaints() {
  const columns = [
    { label: 'Complaint ID', dataKey: 'complainId' },
    { label: 'Complaint Description', dataKey: 'complainDescription' },
    { label: 'Room ID', dataKey: 'roomId' },
    { label: 'Evidence Image', dataKey: 'evidenceImage', isImage: true },
    { label: 'Complaint Date', dataKey: 'date' },
    { label: 'Complaint Status', dataKey: 'status', isStatusChange: true },
  ];

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Fetch complaint data from the API
    axios.get('http://3.229.95.193:8080/complains')
      .then((complaintResponse) => {
        // Handle success
        setComplaints(complaintResponse.data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error fetching complaint data:', error);
      });
  }, []);

  // Create a state variable to manage selected values of dropdowns
  const [selectedStatus, setSelectedStatus] = useState({});

  // Handle changing the status of a complaint
  // Handle changing the status of a complaint
const handleStatusChange = (complaint, newStatus) => {
    // Make a PUT request to update the status of the complaint
    axios.put(`http://localhost:8080/complains/${complaint.complainId}`, {
      status: newStatus,
    })
      .then((response) => {
        // Update the local state with the new status
        setSelectedStatus({
          ...selectedStatus,
          [complaint.complainId]: newStatus,
        });
        showSuccessToast('Status updated successfully');
       

      })
      .catch((error) => {
        console.error('Error updating complaint status:', error);
        showErrorToast('Failed to update status');

      });
  };

  const showSuccessToast = (message) => {
    toast.success(message);
  };

  const showErrorToast = (message) => {
    toast.error(message);
  };
  

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-grow-1">
        <Topbar />
        <div className="p-4">
          <table className="table table-striped">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={index}>{column.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
            {complaints.map((complaint, index) => (
  <tr key={index}>
    {columns.map((column, columnIndex) => (
      <td key={columnIndex}>
        {column.isStatusChange ? (
          <div>
            <span>{complaint[column.dataKey]}</span>
            <select
              value={selectedStatus[complaint.complainId] || complaint.status}
              onChange={(e) => {
                const newStatus = e.target.value;
                setSelectedStatus({
                  ...selectedStatus,
                  [complaint.complainId]: newStatus,
                });
              }}
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
              <option value="In Progress">In Progress</option>
            </select>
            <button className="btn btn-primary" onClick={() => handleStatusChange(complaint, selectedStatus[complaint.complainId])}>
              Save
            </button>
          </div>
        ) : column.isImage ? (
          <img src={complaint[column.dataKey]} alt="Evidence" style={{ maxWidth: '100px' }} />
        ) : (
          column.isAction ? (
            <button className="btn btn-primary" onClick={() => handleStatusChange(complaint, complaint.status)}>
              Save
            </button>
          ) : complaint[column.dataKey]
        )}
      </td>
    ))}
  </tr>
))}
            </tbody>
            <ToastContainer />

          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewComplaints;
