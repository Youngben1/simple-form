import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.css";
import { logout, selectUser } from "../features/userSlice";

const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div className="logout">
      <h1>
        Welcome <span className="user_name">{user.username}</span>
      </h1>
      <button className="logout_btn" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
      <button className="diff_userbtn">
        <a href="/">Sign In with Different User</a>
      </button>
    </div>
  );
};

export default Logout;
