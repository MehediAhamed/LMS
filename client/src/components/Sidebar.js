import React from 'react';
import { Link } from "react-router-dom";
import { logoutUser } from "../actions/user_action";
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.userLoginReducer);

  const sidebarStyle = {
    marginTop: "10%",
    backgroundColor: "#8B0000", // Reddish color
    padding: "10px",
    borderRadius: "10px",
  };

  const listItemStyle = {
    textDecoration: "none",
    color: "#f1f1f1",
    fontSize: "20px",
    marginLeft: "5px",
    fontFamily: "Oswald",
  };

  const logoutStyle = {
    fontSize: "20px",
    color: "#fff",
    marginLeft: "2px",
    fontFamily: "Oswald",
  };

  return (
    <div style={sidebarStyle}>
      <ul>
        <li className="list_item">
          <i className="fas fa-home text-white"></i>
          <Link to="/dashboard/" style={listItemStyle}> Home </Link>
        </li>
        <hr style={{ color: "white" }} />
        <li>
          <i className="fas fa-address-book text-white"></i>
          <Link to="/dashboard/allBook" style={listItemStyle}> All Books </Link>
        </li>
        <hr style={{ color: "white" }} />
        {currentUser.user.isAdmin ? (
          <>
            <li>
              <i className="fas fa-book text-white"></i>
              <Link to="/dashboard/addBook" style={listItemStyle}> Add Book </Link>
            </li>
            <hr style={{ color: "white" }} />
            <li>
              <i className="fas fa-users text-white"></i>
              <Link to="/dashboard/manageStudent" style={listItemStyle}> Manage Users </Link>
            </li>
            <hr style={{ color: "white" }} />
            <li>
              <i className="fas fa-registered text-white"></i>
              <Link to="/dashboard/stuReqIssue" style={listItemStyle}> Issue Request </Link>
            </li>
            <hr style={{ color: "white" }} />
            <li>
              <i className="fas fa-book text-white"></i>
              <Link to="/dashboard/Recommandation" style={listItemStyle}> Book Recommendation </Link>
            </li>
            <hr style={{ color: "white" }} />
            <li>
              <i className="fas fa-book text-white"></i>
              <Link to="/dashboard/allissuedBook" style={listItemStyle}> All Issued Books </Link>
            </li>
            <hr style={{ color: "white" }} />
            <li>
              <i className="fas fa-book text-white"></i>
              <Link to="/dashboard/issue_return" style={listItemStyle}> Today Issue Books </Link>
            </li>
            <hr style={{ color: "white" }} />
            <li>
              <i className="fas fa-book text-white"></i>
              <Link to="/dashboard/returnBook" style={listItemStyle}> Today Return Books </Link>
            </li>
            <hr style={{ color: "white" }} />
          </>
        ) : (
          <>
            <li>
              <i className="fas fa-registered text-white"></i>
              <Link to="/dashboard/RecomBook" style={listItemStyle}> Recommended Books </Link>
            </li>
            <hr style={{ color: "white" }} />
            <li>
              <i className="fas fa-book text-white"></i>
              <Link to="/dashboard/issuedBook" style={listItemStyle}> Currently Issued Books </Link>
            </li>
            <hr style={{ color: "white" }} />
          </>
        )}
        <li onClick={() => dispatch(logoutUser())}>
          <i className="fas fa-power-off text-white"></i>
          <span style={logoutStyle}> Logout </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
