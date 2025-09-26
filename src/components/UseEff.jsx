import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import axios from "axios";
import { FiX } from "react-icons/fi";

const UseEff = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null); // for modal

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [refresh]);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0 text-primary fw-bold">User Profiles</h1>
        <button
          className="btn btn-outline-primary"
          onClick={() => setRefresh(refresh + 1)}
        >
          Refresh
        </button>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center">
          <Loader />
        </div>
      ) : (
        <div className="row g-4">
          {users.map((u) => (
            <div key={u.id} className="col-md-6 col-lg-4">
              <div
                className="card shadow-lg h-100 border-0 overflow-hidden hover-shine"
                style={{ cursor: "pointer", transition: "transform 0.3s, box-shadow 0.3s" }}
                onClick={() => setSelectedUser(u)}
              >
                {/* Card Header with blue gradient */}
                <div
                  className="d-flex align-items-center justify-content-start p-3"
                  style={{
                    background: "linear-gradient(135deg, #6dd5fa 0%, #2980b9 100%)",
                    color: "#fff",
                  }}
                >
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#fff",
                      color: "#2980b9",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    {getInitials(u.name)}
                  </div>
                  <div>
                    <h5 className="mb-0">{u.name}</h5>
                    <small>@{u.username}</small>
                  </div>
                </div>

                <div className="card-body text-secondary">
                  <p className="mb-1">
                    <strong>Email:</strong> {u.email}
                  </p>
                  <p className="mb-1">
                    <strong>Phone:</strong> {u.phone}
                  </p>
                  <p className="mb-1">
                    <strong>Website:</strong>{" "}
                    <a
                      href={`https://${u.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {u.website}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* User Modal */}
      {selectedUser && (
        <div
          className="modal d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ maxWidth: "500px" }}
          >
            <div className="modal-content shadow-lg rounded">
              <div
                className="modal-header"
                style={{
                  background: "linear-gradient(135deg, #6dd5fa 0%, #2980b9 100%)",
                  color: "#fff",
                }}
              >
                <h5 className="modal-title">{selectedUser.name}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Close"
                  onClick={() => setSelectedUser(null)}
                >
                  <FiX size={20} />
                </button>
              </div>
              <div className="modal-body text-secondary">
                <p>
                  <strong>Username:</strong> {selectedUser.username}
                </p>
                <p>
                  <strong>Email:</strong> {selectedUser.email}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedUser.phone}
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href={`https://${selectedUser.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {selectedUser.website}
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> {selectedUser.address.suite},{" "}
                  {selectedUser.address.street}, {selectedUser.address.city} -{" "}
                  {selectedUser.address.zipcode}
                </p>
                <p>
                  <strong>Company:</strong> {selectedUser.company.name} (
                  {selectedUser.company.catchPhrase})
                </p>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedUser(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .hover-shine:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
};

export default UseEff;
