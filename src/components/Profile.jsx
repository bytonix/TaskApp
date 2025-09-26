import React, { useContext } from "react";
import { UserContext } from "../context/AuthContext"
import Navbar from "../includes/Header";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({ name: "", loggedIn: false });
  };

  if (!user?.loggedIn) {
    return (
      <div className="container mt-5 text-center">
        <h3 className="text-muted">You are not logged in.</h3>
      </div>
    );
  }

  return (
    <>

    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4 text-center" style={{ maxWidth: 400 }}>
        <h2 className="mb-3">👤 Profile</h2>
        <h4 className="fw-bold">{user.name}</h4>
        <p className="text-success fw-semibold">Logged in</p>
        <button
          className="btn btn-outline-danger mt-3 px-4 rounded-pill"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
    </>
  );
};

export default Profile;
