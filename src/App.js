import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import Dashboard from "./components/Admin/dashboard";
import AddAssets from "./components/Admin/Assets/add_assets";
import ViewAssets from "./components/Admin/Assets/view_assets";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/admin_dashboard" element={<Dashboard/>}></Route>
        <Route path="/add_asset" element={<AddAssets/>}></Route>
        <Route path="/view_asset" element={<ViewAssets/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
