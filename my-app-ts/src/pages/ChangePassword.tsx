export default function ChangePassword() {
  return (
    <div className="changepassform" style={{ margin: "20px" }}>
      <h2>Change Password</h2>
      <input type="password" placeholder="New Password" />
      <br />
      <button>Change</button>
    </div>
  );
}