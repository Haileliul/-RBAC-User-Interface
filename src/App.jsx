import React from "react";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";

function App() {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>User Management</li>
          <li>Role Management</li>
        </ul>
      </aside>
      <main className="main-content">
        <RoleManagement />
        <UserManagement />
      </main>
    </div>
  );
}

export default App;
