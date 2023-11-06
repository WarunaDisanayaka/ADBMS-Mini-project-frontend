import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MaintenanceTable = ({ columns, data }) => {

    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [id, setId] = useState('');
    const [regno, setRegNO] = useState('');


    const navigate = useNavigate();


    useEffect(() => {
        setFilteredData(data);

    }, [data]);

    const handleSearch = (event) => {
        const term = event.target.value.trim().toLowerCase();
        setSearchTerm(term);

        if (data) {
            const filteredData = data.filter(
                (row) =>
                    columns.some(
                        (col) =>
                            row[col.dataKey] && row[col.dataKey].toString().toLowerCase().includes(term)
                    )
            );
            setFilteredData(filteredData);
        }
    };

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



    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const getImage = (path) => {

        return <a href={path} target='_blank'  title="Click to view"><img src={path} alt="Asset" style={{ width: '70px', height: '70px' }} /></a>;
    };


    

    const handleDelete = () => {
        axios
            .delete(`http://3.229.95.193:8080/users/${id}`)
            .then(response => {
                // Handle success

                window.location.reload();
            })
            .catch(error => {
                // Handle error
                notify();
            });
        setShow(false);
    };

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
       
    };

    return (
        <div className="container mt-5 mb-1 shadow-sm">
            <div className="d-flex justify-content-between mb-3">

                <div className="form-inline ml-3 mt-2">
                    <label className="mr-2">Rows per page:</label>
                    <select
                        className="form-control"
                        value={rowsPerPage}
                        onChange={(e) => setRowsPerPage(Number(e.target.value))}
                    >
                        <option>5</option>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                    </select>
                </div>
                <div className="search-container mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            {columns.map((col) => (
                                <th key={col.dataKey}>{col.label}</th>
                            ))}
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {currentRows.map((row, index) => (
                            <tr key={index}>
                                {columns.slice(0, -1).map((col) => (
                                    <td key={col.dataKey}>{row[col.dataKey]}</td>
                                ))}
                                <td className='p-2'>
                                {getImage(row.evidenceImage)}
                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination-container d-flex justify-content-end mt-3">
                <ul className="pagination">
                    {Array.from({ length: Math.ceil(filteredData.length / rowsPerPage) }, (_, index) => index + 1).map(
                        (pageNumber) => (
                            <li
                                key={pageNumber}
                                className={`page-item ${currentPage === pageNumber ? "active" : ""}`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => handlePageChange(pageNumber)}
                                >
                                    {pageNumber}
                                </button>
                            </li>
                        )
                    )}
                </ul>
            </div>


            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body><div className="alert alert-danger">Are you sure you want to delete '{regno}' user?</div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        CLOSE
                    </Button>
                    <Button variant="danger" onClick={handleDelete} >
                        DELETE
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
};

export default MaintenanceTable;