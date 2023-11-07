import axios from 'axios';
import React, { useEffect, useState } from 'react';


const UserlogData = ({ columns, data }) => {

    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  



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

  



    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);



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
            <div className="table-responsive " >
                <table className="table table-bordered table-hover ">
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
                                {columns.map((col) => (
                                    <td key={col.dataKey}>{row[col.dataKey]}</td>
                                ))} 
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

        </div>
    );
};

export default UserlogData;