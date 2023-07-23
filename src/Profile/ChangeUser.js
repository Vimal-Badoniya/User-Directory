import React from "react";
import UserList from "../Home/UserList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ChangeUser = (props) => {
    const navigate = useNavigate()
  const user = useSelector((state) => {
    return state.currentUser;
  });
  const signoutHandler = ()=>{
    navigate('/')
  }
  return (
    <div>
      <div className="center" style={{ flexDirection: "column" }}>
        <img src={user.profilepicture} alt="DP" className="photo" />
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
      </div>
      <div className="right">
        <UserList />
      </div>
      <div className="center">
        <button className="signout" onClick={props.click}>Close</button>
        <button className="signout" onClick={signoutHandler}>Signout</button>
      </div>
    </div>
  );
};

export default ChangeUser;
