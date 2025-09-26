import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from './context/AuthContext';

const App = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const[email ,setEmail] = useState("")
  const {user, setUser} = useContext(UserContext)


    useEffect(()=>{
        if(user.loggedIn){
      toast.error("You are already loggedin ")
      navigate("/")
    }
    },[user, navigate])

function handleSubmit(e) {
  e.preventDefault();

  if (email === "prasad@mail.com" && password === "12345") {
    const newUser = { name: email, loggedIn: true };

    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));

    toast.success("Login success");
    navigate("/");   
  } else {
    toast.error("Invalid username or password");
  }
}


  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: "350px" }}>
        <h2 className="text-center text-primary fw-bold mb-4">🔐 Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="text"
              className="form-control rounded-pill px-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-pill px-3"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 rounded-pill fw-semibold"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center text-muted mt-3 small">
          <Link to="/signup">Dont have an account?</Link>
        </p>
      </div>
    </div>
  );
};

export default App;
