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
                <a className="nav-link" href="/admin_dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </a>
            </li>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">Addons</div>
            <li className="nav-item">
                <a className="nav-link collapsed d-flex align-items-center justify-content-between" href="#collapseTwo"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
                    aria-controls="collapseTwo">
                    <span>
                        <i className="fas fa-th-list"></i>
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
                        <i className="fas fa-solid fa-hotel"></i>
                        Rooms
                    </span>
                    <i className="fas fa-angle-right"></i>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        
                        <a className="collapse-item" href="/add_room"><i className="fas fa-plus-circle"></i> Add a Room</a>
                        
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link collapsed d-flex align-items-center justify-content-between" href="#collapseUsers"
                    data-bs-toggle="collapse" data-bs-target="#collapseUsers" aria-expanded="true"
                    aria-controls="collapseUsers">
                    <span>
                        <i className="fas fa-solid fa-user"></i>
                        Users
                    </span>
                    <i className="fas fa-angle-right"></i>
                </a>
                <div id="collapseUsers" className="collapse" aria-labelledby="headingUsers"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        
                        <a className="collapse-item" href="/add_user"><i className="fas fa-plus-circle"></i> Add a User</a>
                        <a className="collapse-item" href="/view_user"><i className="fas fa-newspaper"></i>  User list</a>
                        
                    </div>
                </div>
            </li>
            <hr className="sidebar-divider" />
            <div className="sidebar-heading">Actions</div>
        
            <li className="nav-item">
                <a className="nav-link" href="/view_complaint"> <i className="fas fa-fw fa-comments"></i> <span>Complaints</span> </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/view_maintenance"> <i className="fas fa-fw fa-wrench"></i> <span>Maintenance</span> </a>
            </li>
            <hr className="sidebar-divider d-none d-md-block" />
            <div className="text-center d-none d-md-inline">
            </div>
        </ul>
    );
};

export default Sidebar;
