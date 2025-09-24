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
      {/* Bootstrap CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        defer
      ></script>

      <nav className="navbar bg-dark navbar-expand-lg navbar-dark bg-gradient fixed-top shadow">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-uppercase" href="#">
            🚀 MyApp
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <Link  to="/login" className="btn btn-light ms-lg-3 px-3 rounded-pill">
                  Login
                </Link>
              </li>

               <li className="nav-item">
                <button  onClick={handleLogout} className="btn btn-light ms-lg-3 px-3 rounded-pill">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Extra spacing to push content below navbar */}
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
