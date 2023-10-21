import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
// import Dashboard from "./pages/Dashboard";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        {/* <Route path="/home" element={<Dashboard/>}></Route> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
