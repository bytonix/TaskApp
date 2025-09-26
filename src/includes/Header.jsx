import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../context/AuthContext';



const Navbar = () => {
  const {user, setUser} = useContext(UserContext)

  const handleLogout= () =>{
      setUser(user.name= '', user.loggedIn=false)
      localStorage.setItem('user', JSON.stringify(user))
  }
  return (
    <>
      {/* Bootstrap CSS/JS is loaded globally in index.html */}

      <nav className="navbar bg-dark navbar-expand-lg navbar-dark bg-gradient fixed-top shadow">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-uppercase" to="#">
            🚀 MyApp
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link  to="/login" className="btn btn-light ms-lg-3 px-3 rounded-pill">
                  Login
                </Link>
              </li> */}

               <li className="nav-item">
                <button  onClick={handleLogout} className="btn btn-light ms-lg-3 px-3 rounded-pill">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ExtrLink spacing to push content below navbar */}
      <div style={{ marginTop: "80px" }}></div>

      

      {/* Custom CSS */}
      <style>{`
        .bg-gradient {
          background: linear-gradient(90deg, #0d6efd, #6610f2);
        }
        .navbar-brand {
          font-size: 1.4rem;
          letter-spacing: 1px;
        }
        .nav-link {
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: #ffd700 !important;
        }
      `}</style>
    </>
  );
};

export default Navbar;
