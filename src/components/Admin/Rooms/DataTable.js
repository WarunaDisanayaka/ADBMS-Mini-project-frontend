import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


const DataTable = ({ columns, data }) => {
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    // const navigate = useNavigate();
    const [id, setId] = useState('');

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleSearch = (event) => {
        const term = event.target.value.trim().toLowerCase();
        setSearchTerm(term);

        const filteredData = data.filter(
            (row) =>
                columns.some(
                    (col) =>
                        row[col.dataKey].toString().toLowerCase().includes(term)
                )
        );
        setFilteredData(filteredData);

    };


    const handlePageChange = (pageNumber) => {

        setCurrentPage(pageNumber);
    };

    // const handleEditButtonClick = (index) => {
    //     const row = data[index];
    //    navigate('/edit_room',{state: row});
    // };



    const handleDeleteButtonClick = (index) => {
        setId(filteredData[index].roomId);
        setShow(true);
    };

    const handleDelete = () => {
        axios
            .delete(`http://3.229.95.193:8080/rooms/delete-room/${id}`)
            .then(response => {
                // Handle success
                console.log(response);
                window.location.reload();
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
        setShow(false);
    };

    const renderPagination = () => {
        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        
    
        return (
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
    );
};


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-between mb-3">

                <div className="form-inline ml-3">
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
                <div className="search-container">
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, index) => (
                            <tr key={index}>
                                {columns.map((col) => (
                                    <td key={col.dataKey}>{row[col.dataKey]}</td>
                                ))}
                                <td className='p-2'>
                                    <button
                                        className="btn btn-outline-danger btn-sm ml-2"
                                        onClick={() => handleDeleteButtonClick(index)}
                                    >
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination-container d-flex justify-content-end mt-3">
                {renderPagination()}
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body><div className="alert alert-danger">Are you sure you want to delete '{id}' Room?</div></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        CLOSE
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        DELETE
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
};

export default DataTable;