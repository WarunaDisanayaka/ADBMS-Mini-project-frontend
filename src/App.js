import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        {/* <Route path="/signup" element={<Signup/>}></Route> */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;
