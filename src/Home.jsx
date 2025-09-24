import React, { useContext, useEffect } from 'react'
import {  Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './includes/Header';
// import CardItem from './components/Card'
// import { FaUser,FaTasks, FaCog } from "react-icons/fa"; // Example icon
import { UserContext } from './context/AuthContext';
import { toast } from 'react-toastify';


const Home = () => {
  
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate()

  // useEffect(()=>{
  //     if(!user.loggedIn){
  //   toast.error("Please Login to Continue")
  //   navigate("/login")
  // }
  // })


  return (
    <>
    <Navbar/>
    
    <div>Home</div>
    <h1>Welcome</h1>
    <h3>{user.name}</h3>
    <br />
    <p>your password is </p>

  {/* <div className="container">
      <div className="row">
        <CardItem icon={<FaUser />} name="Profile" to="/profile" />
        <CardItem icon={<FaTasks />} name="Tasks" to="/tasks" />
        <CardItem icon={<FaCog />} name="Settings" to="/settings" />
      </div>
    </div> */}
    </>
  )
}

export default Home