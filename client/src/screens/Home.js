import React from 'react';
import { Link } from "react-router-dom";
import StudentImage from "../Images/student4.jpg";
import FacultyImage from "../Images/faculty.jpg";
import AdminImage from "../Images/admin2.jpg";

const Home = () => {
  return (
    <div className="HomePage">
      <div className="col-md-9 m-auto" style={{ display: "flex", justifyContent: 'space-around', backgroundColor: "white", padding: "5%" }}>
        <div className="card" style={{ marginLeft: "15%", textAlign: "center" }}>
          <img src={AdminImage} alt="AdminImage" style={{ height: "250px", width: "250px", borderRadius: "50%", objectFit: "cover" }} />
          <br />
          <Link className="link_class" to="/adminLogin">
            <h3 style={{ fontFamily: "Oswald", margin: "15px 0" }}>Sign in as Admin</h3>
          </Link>
        </div>
        <div className="card" style={{ marginLeft: "10%", textAlign: "center" }}>
          <img src={StudentImage} alt="StudentImage" style={{ height: "250px", width: "250px", borderRadius: "50%", objectFit: "cover" }} />
          <br />
          <Link className="link_class" to="/login">
            <h3 style={{ fontFamily: "Oswald", margin: "15px 0" }}>Sign in as Student</h3>
          </Link>
        </div>
        <div className="card" style={{ marginLeft: "10%", textAlign: "center" }}>
          <img src={FacultyImage} alt="FacultyImage" style={{ height: "250px", width: "250px", borderRadius: "50%", objectFit: "cover" }} />
          <br />
          <Link className="link_class" to="/login">
            <h3 style={{ fontFamily: "Oswald", margin: "15px 0" }}>Sign in as Faculty</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
