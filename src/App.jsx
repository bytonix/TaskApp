import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from './context/AuthContext.jsx';
import ProtectedRoutes from "./context/ProtectedRoutes.jsx";
import Loader from "./components/Loader.jsx";
import Task from "./components/Task.jsx";
import Navbar from "./includes/Header.jsx";
import UseEff from "./components/UseEff.jsx";

const Login = lazy(() => import('./Login'));
const Home = lazy(() => import('./Home'));
const NotFound = lazy(() => import('./NotFound'));
const Timer = lazy(() => import('./components/Timer.jsx'));
const Profile = lazy(() => import('./components/Profile.jsx'));

const App = () => {
  return (
    <AuthContext>
      <BrowserRouter>
        <Suspense fallback={<Loader/>}>
          <Routes>
            {/* Guest Routes everyone can access */}
            <Route path="/login" element={<Login />} />
            <Route path="/timer" element={<><Navbar/><Timer /></>} />
            <Route path="/eg" element={<><Navbar/><UseEff/></>}/>
            {/* only logged in user can access  */}

            <Route path="/" element={<ProtectedRoutes><Navbar/><Home /></ProtectedRoutes>} />
            <Route path="/profile" element={<ProtectedRoutes><Navbar/><Profile /></ProtectedRoutes>} />
            <Route path="/task" element={<ProtectedRoutes><Navbar/><Task /></ProtectedRoutes>} />


            {/* not found page for undefined routes */}
            <Route path="*" element={<><Navbar/><NotFound /></>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthContext>
  );
};

export default App;
