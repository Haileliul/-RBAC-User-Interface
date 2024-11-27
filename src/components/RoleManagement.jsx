import React, { useState, useEffect } from "react";
import { mockApi } from "../api/mockApi";
function RoleManagement() {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  useEffect(() => {
    mockApi.getRoles().then(setRoles);
  }, []);

  return (
    <div className="management">
      <h2>Manage Roles</h2>
      <table>
        <thead>
          <tr>
            <th>Role Name</th>
            <th>Permissions</th>
            <th>Set as Default</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <button>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        className="w-1/3 p-3 mb-4 mr-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
        placeholder="Role Name"
        value={newRole.name}
        onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
      />
      <input
        className="w-1/3 p-3 mr-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
        placeholder="Permissions (comma-separated)"
        value={newRole.permissions.join(", ")}
        onChange={(e) =>
          setNewRole({ ...newRole, permissions: e.target.value.split(",") })
        }
      />
      <button className="add-role-btn">Add Role</button>
    </div>
  );
}

export default RoleManagement;
