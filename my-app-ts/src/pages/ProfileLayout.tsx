import { NavLink, Outlet } from "react-router-dom";

export default function ProfileLayout() {
  return (
    <div style={{ padding: 20 }}>
      <h1>User management</h1>

      <nav style={{ display: "flex", gap: 20, marginBottom: 20 }}>
        <NavLink to="/profile/info" className={({ isActive }) =>
            isActive ?"nav-link active" :"nav-link"
          }>Personal Information</NavLink>
        <NavLink to="/profile/change-password" className={({ isActive }) =>
            isActive ?"nav-link active" :"nav-link"
          }>Change Password</NavLink>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
