import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./includes/Header";
import CardItem from "./components/Card";
import { FaUser, FaTasks, FaCog, FaTimes, FaCalculator, FaUsers } from "react-icons/fa"; // Example icon
import { UserContext } from "./context/AuthContext";
import { toast } from "react-toastify";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <>

      <div className="text-center">
        <h1
          style={{
            fontWeight: 700,
            fontSize: "2.5rem",
            color: "#3730a3",
            marginBottom: 8,
          }}
        >
          Welcome
        </h1>
        <h3 style={{ color: "#6366f1", fontWeight: 500, marginBottom: 24 }}>
          {user.name}
        </h3>
      </div>
      <br />
      <br />

      <div className="container">
        <div className="row">
          
          <CardItem icon={<FaUser />} name="Profile" to="/profile" />
          <CardItem icon={<FaTimes />} name="Timer" to="/timer" />
          <CardItem icon={<FaTasks />} name="Tasks" to="/task" />
          <CardItem icon={<FaCog />} name="Settings" to="/settings" />
          <CardItem icon={<FaCalculator />} name="Calculator" to="/calculator" />
          <CardItem icon={<FaUsers />} name="Fetch USers" to="/eg" />

        </div>
      </div>
    </>
  );
};

export default Home;
