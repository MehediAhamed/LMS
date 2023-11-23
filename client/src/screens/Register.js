import React from "react";
import { Link } from "react-router-dom";
import SignInForm from "../components/Form/Register";
import StudentImage from "../Images/Libary.jpg";

const Register = () => {
  return (
    <div style={{ position: "relative" }}>
      <div className="LoginPage" style={{ height: "100vh", backgroundImage: `url(${StudentImage})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
      <div className="login_container" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: "white", fontWeight: "bold", border: "3px solid #f1f1f1", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "2", width: "80%", maxWidth: "400px", padding: "20px", textAlign: "center" }}>
        <div style={{ marginLeft: "50%", transform: "translateX(-50%)", marginBottom: "20px" }}>
          {/* <div id="circle" style={{ height: "100px", width: "100px", borderRadius: "50%", backgroundColor: "red", opacity: "1" }}></div> */}
          <h3 className="LMS_R" style={{ fontFamily: "sans-serif", margin: "-77px 0 0 -102px", fontSize: "50px", paddingBottom: "20px", color: "white" }}>LMS</h3>
        </div>
        <p style={{ color: "white", fontWeight: "800", textAlign: "center" }}>Welcome to Library Management System</p>
        <div style={{ maxWidth: "300px", margin: "0 auto" }}>
          <SignInForm />
          <p style={{ color: "white", marginTop: "15px", textAlign: "center" }}>
            Already have an account? <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
