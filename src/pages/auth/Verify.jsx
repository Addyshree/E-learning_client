import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import { CourseData } from "../../context/CourseContext";
function Verify() {
  const [otp, setOtp] = useState("");
  const { btnLoading, verifyOtp } = UserData();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    await verifyOtp(Number(otp), navigate);
  };
  return (
    <div className="auth-page">
      <div className="auth-form">
        <h2>Verify Account</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="otp">Otp</label>
          <input type="number" required />
          <button className="common-btn" type="submit" disabled={btnLoading}>
            {btnLoading ? "Please Wait..." : "Verify"}
          </button>{" "}
        </form>
        <p>
          Go to <Link to="/login">Login Page </Link>
        </p>
      </div>
    </div>
  );
}

export default Verify;
