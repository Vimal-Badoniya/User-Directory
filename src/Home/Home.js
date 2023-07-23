import React from "react";
import UserList from "./UserList";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

const Home = () => {
  return (
    <div className="center">
      <div className="arrow">
        <h2>Select An User</h2>
        <h2 className="center">
          <BsFillArrowDownSquareFill />
        </h2>
      </div>
      <div className="home">
        <UserList />
      </div>
    </div>
  );
};

export default Home;
