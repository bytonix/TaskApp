import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login'
import Home from "./Home";
import NotFound from "./NotFound";
import AuthContext from './context/AuthContext.jsx'
import ProtectedRoutes from "./context/ProtectedRoutes.jsx";

const App = () => {
  return (
    <>
    <AuthContext>
      <BrowserRouter>
        <Routes>

          
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      </AuthContext>
    </>
  );
};

export default App;
