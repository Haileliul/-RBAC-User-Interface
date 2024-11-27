import React, { useState, useEffect } from "react";
import { mockApi } from "../api/mockApi";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    role: "",
    status: "Active",
  });

  useEffect(() => {
    mockApi.getUsers().then(setUsers);
  }, []);

  const handleAddUser = () => {
    mockApi.addUser(newUser).then((user) => setUsers([...users, user]));
    setNewUser({ name: "", role: "", status: "Active" });
  };

  const handleDeleteUser = (id) => {
    mockApi
      .deleteUser(id)
      .then(() => setUsers(users.filter((user) => user.id !== id)));
  };

  return (
    <div className="management">
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role} - {user.status}
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        className="w-1/3 p-3 mr-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        className="w-1/3 p-3 mr-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
        placeholder="Role"
        value={newUser.role}
        onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
}

export default UserManagement;
