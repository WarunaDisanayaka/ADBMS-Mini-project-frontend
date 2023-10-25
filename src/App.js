import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import Dashboard from "./components/Admin/dashboard";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/admin_dashboard" element={<Dashboard/>}></Route>
        <Route path="/add_asset" element={<Dashboard/>}></Route>
        <Route path="/view_asset" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
