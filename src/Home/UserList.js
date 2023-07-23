import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../Redux/UserSlice";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => {
    return state.allUsers;
  });
  const dispatch = useDispatch();

  const clickHandler = async (user) => {
    console.log("clicked", user.name);
    await dispatch(setCurrentUser(user));
    navigate("/profile/user");
  };
  return (
        <ul>
          {users.map((user) => {
            return (
              <div
                key={user.id}
                className="user"
                onClick={() => {
                  clickHandler(user);
                }}
              >
                <span>
                  <img
                    src={user.profilepicture}
                    alt="profile-picture"
                    className="dp"
                  />
                </span>
                <h2>{user.name}</h2>
              </div>
            );
          })}
        </ul> 
  );
};

export default UserList;
