import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Assets/vendor/fontawesome-free/css/all.min.css";
import "../Assets/css/sb-admin-2.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Topbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white topbar static-top shadow">
      <button
        className="btn btn-link d-md-none rounded-circle me-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <div className="topbar-divider d-none d-sm-block"></div>
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="me-2 d-none d-lg-inline text-gray-600">Welcome : Douglas McGee</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end shadow animated--grow-in" aria-labelledby="userDropdown">
              {/* <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>
                  Activity Log
                </a>
              </li> */}
              {/* <li>
                <hr className="dropdown-divider" />
              </li> */}
              <li>
                <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#logoutModal">
                  <i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
