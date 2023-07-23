import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavLink, Outlet } from "react-router-dom";
import ChangeUser from "./ChangeUser";
import { PiChatTeardropDotsFill } from "react-icons/pi";
import Chats from "./Chats";

const Profile = () => {
  const [visibility, setVisibility] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => {
    return state.currentUser;
  });

  useEffect(() => {
    if (!user.name) {
      navigate("/");
    }
  }, [user]);
  return (
    <div>
      <header>
        <div>
          <NavLink to="/profile/user">Profile</NavLink>
          <NavLink to="/profile/posts">Posts</NavLink>
          <NavLink to="/profile/gallery">Gallery</NavLink>
          <NavLink to="/profile/todo">Todo</NavLink>
        </div>
        <div
          className="center border name"
          onClick={() => {
            setVisibility(true);
          }}
        >
          <img src={user.profilepicture} className="dp" alt="DP" />
          <h3 style={{ marginLeft: "2rem" }}>{user.name}</h3>
        </div>
      </header>
      {visibility && (
        <div className="change">
          <ChangeUser
            click={() => {
              setVisibility(false);
            }}
          />
        </div>
      )}
      <button className="chat-button"
      onClick={()=>{setShowChat(true)}}>
        <span>
          <PiChatTeardropDotsFill />
        </span>
        Chats
      </button>
      {showChat && <button className="signout close" onClick={()=>{setShowChat(false)}}>Close</button>}
      {showChat && <Chats />}
      <Outlet />
    </div>
  );
};

export default Profile;
