import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import Dashboard from "./components/Admin/dashboard";
import DisplayAsset from "./components/Admin/display_assets";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/admin_dashboard" element={<Dashboard/>}></Route>
        <Route path="/display_asset" element={<DisplayAsset/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
