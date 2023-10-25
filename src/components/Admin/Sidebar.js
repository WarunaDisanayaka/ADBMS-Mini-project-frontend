import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Assets/vendor/fontawesome-free/css/all.min.css";
import "../../Assets/css/sb-admin-2.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Sidebar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                {/* <div className="sidebar-brand-icon ">
                    <i className="fas fa-house"></i>
                </div> */}
                <div className="sidebar-brand-text mx-3">Hostel Assets Management</div>
            </a>
            <hr className="sidebar-divider my-0" />
            <li className="nav-item">
                <a className="nav-link" href="/">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">Items</div>
            <li className="nav-item">
                <a className="nav-link collapsed d-flex align-items-center justify-content-between" href="#collapseTwo"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
                    aria-controls="collapseTwo">
                    <span>
                        <i className="fas fa-cog"></i>
                        Assets
                    </span>
                    <i className="fas fa-angle-right"></i>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <a className="collapse-item" href="/add_asset"><i className="fas fa-plus-circle"></i> Add a asset</a>
                        <a className="collapse-item" href="/view_asset"><i className="fas fa-newspaper"></i>  Asset list</a>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link collapsed d-flex align-items-center justify-content-between" href="#collapseUtilities"
                    data-bs-toggle="collapse" data-bs-target="#collapseUtilities" aria-expanded="true"
                    aria-controls="collapseUtilities">
                    <span>
                        <i className="fas fa-fw fa-wrench"></i>
                        Utilities
                    </span>
                    <i className="fas fa-angle-right"></i>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="/">Colors</a>
                        <a className="collapse-item" href="/">Borders</a>
                        <a className="collapse-item" href="/">Animations</a>
                        <a className="collapse-item" href="/">Other</a>
                    </div>
                </div>
            </li>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">Addons</div>
            <li className="nav-item">
                <a className="nav-link collapsed d-flex align-items-center justify-content-between" href="#collapsePages"
                    data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="true"
                    aria-controls="collapsePages">
                    <span>
                        <i className="fas fa-fw fa-folder"></i>
                        Pages
                    </span>
                    <i className="fas fa-angle-right"></i>
                </a>
                <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Login Screens:</h6>
                        <a className="collapse-item" href="/">Login</a>
                        <a className="collapse-item" href="/">Register</a>
                        <a className="collapse-item" href="/">Forgot Password</a>
                        <div className="dropdown-divider"></div>
                        <h6 className="collapse-header">Other Pages:</h6>
                        <a className="collapse-item" href="/">404 Page</a>
                        <a className="collapse-item" href="/">Blank Page</a>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> <i className="fas fa-fw fa-chart-area"></i> <span>Charts</span> </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/"> <i className="fas fa-fw fa-table"></i> <span>Tables</span> </a>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
        </ul>
    );
};

export default Sidebar;
