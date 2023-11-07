import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import Dashboard from "./components/Admin/dashboard";
import AddAssets from "./components/Admin/Assets/add_assets";
import ViewAssets from "./components/Admin/Assets/view_assets";
import AddRooms from "./components/Admin/Rooms/add_rooms";
import AddUsers from "./components/Admin/Users/add_users";
import ViewUsers from "./components/Admin/Users/view_users";
import ViewMaintenance from "./components/Admin/Maintenance/view_maintenance";
import ViewComplaints from "./components/Admin/Complaints/view_complaints";
import ViewRooms from "./components/Admin/Rooms/view_rooms";
import EditRooms from "./components/Admin/Rooms/edit_room";
import EditAssets from "./components/Admin/Assets/edit_assets";
import EditUsers from "./components/Admin/Users/edit_users";
import Cookies from 'js-cookie';
import UserLog from "./components/Admin/User_Log/user_log";


function App() {
  // A function to check if the user is authenticated (you can implement this as needed)
  const isAuthenticated = () => {
    // Check for the user's authentication status (e.g., from cookies or local storage)
    // Return true if authenticated, otherwise return false
    // Replace this with your actual authentication check
    return !!Cookies.get('userToken');
  };

  // Custom ProtectedRoute component to handle authentication checks
  const ProtectedRoute = ({ element, path }) => {
    // Check if the user is authenticated
    const isUserAuthenticated = isAuthenticated();

    // If the user is not authenticated, redirect to the login page
    if (!isUserAuthenticated && path !== "/") {
      return <Navigate to="/" />;
    }

    // Render the specified element (component)
    return element;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route
          path="/admin_dashboard"
          element={<ProtectedRoute element={<Dashboard />} path="/admin_dashboard" />}
        />
        <Route
          path="/add_asset"
          element={<ProtectedRoute element={<AddAssets />} path="/add_asset" />}
        />
        <Route
          path="/view_asset"
          element={<ProtectedRoute element={<ViewAssets />} path="/view_asset" />}
        />
        <Route
          path="/view_user"
          element={<ProtectedRoute element={<ViewUsers />} path="/view_user" />}
        />
        <Route
          path="/add_user"
          element={<ProtectedRoute element={<AddUsers />} path="/add_user" />}
        />
        <Route
          path="/add_room"
          element={<ProtectedRoute element={<AddRooms />} path="/add_room" />}
        />
        <Route
          path="/view_maintenance"
          element={<ProtectedRoute element={<ViewMaintenance />} path="/view_maintenance" />}
        />
        <Route
          path="/view_complaint"
          element={<ProtectedRoute element={<ViewComplaints />} path="/view_complaint" />}
        />
        <Route
          path="/view_room"
          element={<ProtectedRoute element={<ViewRooms />} path="/view_room" />}
        />
        <Route
          path="/edit_room"
          element={<ProtectedRoute element={<EditRooms />} path="/edit_room" />}
        />
        <Route
          path="/edit_assets"
          element={<ProtectedRoute element={<EditAssets />} path="/edit_assets" />}
        />
         <Route
          path="/edit_users"
          element={<ProtectedRoute element={<EditUsers />} path="/edit_users" />}
        />
        <Route
          path="/user_log"
          element={<ProtectedRoute element={<UserLog />} path="/user_log" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
