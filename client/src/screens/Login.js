import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../actions/user_action";
import { useDispatch } from 'react-redux';
import StudentImage from "../Images/Libary.jpg";

const Login = () => {
  const [password, setPassword] = useState("123456");
  const [show, setShow] = useState("password");
  const [user_id, setUserId] = useState("CS3150");
  const dispatch = useDispatch();

  const PostData = () => {
    const user = { password, user_id };
    dispatch(loginUser(user));
  };

  const handleShow = () => {
    setShow((prevShow) => (prevShow === "password" ? "text" : "password"));
  };

  return (
    <div style={{ position: "relative" }}>
      <div className="LoginPage" style={{ height: "100vh", backgroundImage: `url(${StudentImage})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}></div>
      <div className="login_container" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", color: "white", fontWeight: "bold", border: "3px solid #f1f1f1", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "2", width: "80%", maxWidth: "500px", padding: "20px", textAlign: "center" }}>
        <div style={{ marginLeft: "50%", transform: "translateX(-50%)", marginBottom: "20px" }}>
          <div id="circle" style={{ height: "100px", width: "100px", borderRadius: "50%", backgroundColor: "red", opacity: "1" }}></div>
          <h3 className="LMS" style={{ fontFamily: "sans-serif", margin: "-77px 0 0 -102px", fontSize: "50px", paddingBottom: "20px", color: "white" }}>LMS</h3>
        </div>
        <p>Welcome to Library Management System</p>
        <img src={StudentImage} alt="StudentImage" style={{ height: "220px", width: "220px", borderRadius: "50%" }} />
        <div style={{ marginTop: "20px" }}>
          <input type="text" className="form-control" style={{ height: "60px", borderRadius: "20px" }} placeholder="User ID" value={user_id} onChange={(e) => setUserId(e.target.value)} />
        </div>
        <br />
        <div>
          <input type="password" style={{ height: "60px", borderRadius: "20px" }} className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <i className="fas fa-eye" onClick={handleShow} style={{ position: "absolute", color: "black", marginTop: "-40px", fontSize: "large", marginLeft: "190px" }}></i>
        </div>
        <br />
        <button style={{ width: "100%", height: "60px", color: "white", borderRadius: "20px", backgroundColor: "red" }} onClick={PostData}>Login</button>
        <br />
        <Link to="/register" style={{ fontFamily: "sans-serif", color: "Blue", textDecoration: "none" }}>If you don't have an account, please register.</Link>
      </div>
    </div>
  );
};

export default Login;
