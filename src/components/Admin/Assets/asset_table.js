import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';


const AssetTable = ({ columns, data}) => {
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const navigate =  useNavigate();



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

    const handleEditButtonClick = (index) => {
        const row = data[index];
       navigate('/edit_room',{state: row});
    };

 
    

    const handleDeleteButtonClick = (index) => {
       
    };



    const renderPagination = () => {
        const pageNumbers = Math.ceil(filteredData.length / rowsPerPage);
        return (
            <ul className="pagination">
                {Array.from({ length: pageNumbers }, (_, index) => index + 1).map(
                    (pageNumber) => (
                        <li
                            key={pageNumber}
                            className={`page-item ${currentPage === pageNumber ? "active" : ""
                                }`}
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
                                        className="btn btn-outline-primary btn-sm ml"
                                        onClick={() => handleEditButtonClick(index)}
                                    >
                                        <i className='fas fa-edit'></i>
                                    </button>
                                    <button
                                        className="btn btn-outline-danger btn-sm ml-2"
                                        onClick={() => handleDeleteButtonClick(index)}
                                    >
                                        <i className='fas fa-trash'></i>
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
        </div>
    );
};

export default AssetTable;