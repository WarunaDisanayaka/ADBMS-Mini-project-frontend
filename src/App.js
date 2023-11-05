import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/admin_dashboard" element={<Dashboard/>}></Route>
        <Route path="/add_asset" element={<AddAssets/>}></Route>
        <Route path="/view_asset" element={<ViewAssets/>}></Route>
        <Route path="/view_user" element={<ViewUsers/>}></Route>
        <Route path="/add_user" element={<AddUsers/>}></Route>
        <Route path="/add_room" element={<AddRooms/>}></Route>
        <Route path="/view_maintenance" element={<ViewMaintenance/>}></Route>
        <Route path="/view_complaint" element={<ViewComplaints/>}></Route>
        <Route path="/view_room" element={<ViewRooms/>}></Route>
        <Route path="/edit_room" element={<EditRooms/>}></Route>
        <Route path="/edit_assets" element={<EditAssets/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
