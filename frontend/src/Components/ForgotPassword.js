import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ForgotPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const updatePassword = (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      setErrorMessage("Both fields are required.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }
    setErrorMessage("");
    alert("🎉 Password updated successfully!");
    // Add API call here to update the password in the backend.
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ maxWidth: "420px", width: "100%" }}>
        <h2 className="text-center text-primary">🔒 Change Password</h2>
        <p className="text-center text-muted">Enter your new password to update your credentials.</p>

        <form onSubmit={updatePassword}>
          {/* New Password */}
          <div className="mb-3">
            <label htmlFor="new-password" className="form-label">New Password</label>
            <div className="input-group">
              <input
                type={showNewPassword ? "text" : "password"}
                id="new-password"
                className="form-control"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? "👁️" : "🔒"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                className="form-control"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "👁️" : "🔒"}
              </button>
            </div>
            {errorMessage && <div className="text-danger mt-2">{errorMessage}</div>}
          </div>

          {/* Update Button */}
          <button type="submit" className="btn btn-success w-100">Update Password</button>
        </form>

        {/* Back to Login */}
        <div className="mt-3 text-center">
          <Link to="/" className="text-decoration-none text-primary">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;