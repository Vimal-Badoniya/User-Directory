import React from "react";
import { useSelector } from "react-redux";
import Map from "./Map";

const Details = () => {
  const user = useSelector((state) => {
    return state.currentUser;
  });

  console.log(typeof parseInt(user.address.geo.lat));

  return (
    <div className="layout">
      <div className="one">
        <img src={user.profilepicture} className="photo" alt="DP" />
        <h3 className="company">{user.name}</h3>
        <div>
          <p>
            <span className="light">UserName :</span> {user.username}
          </p>
          <p style={{ marginLeft: "35px" }}>
            <span className="light">Email :</span> {user.email}
          </p>
          <p style={{ marginLeft: "27px" }}>
            <span className="light">Phone :</span> {user.phone}
          </p>
          <p style={{ marginLeft: "17px" }}>
            <span className="light">Website :</span> {user.website}
          </p>
        </div>
      </div>
      <div className="two">
        <h3 className="company">Company</h3>
        <div>
          <p style={{ marginLeft: "84px" }}>
            <span className="light">Name :</span> {user.company.name}
          </p>
          <p style={{ marginLeft: "35px" }}>
            <span className="light">CatchPhrase :</span>{" "}
            {user.company.catchPhrase}
          </p>
          <p style={{ marginLeft: "110px" }}>
            <span className="light">Bs :</span> {user.company.bs}
          </p>
          <p style={{ marginLeft: "66px" }}>
            <span className="light">Website :</span> {user.website}
          </p>
        </div>
      </div>
      <div className="three">
        <h3>Address : </h3>
        <div>
          <p style={{ marginLeft: "70px" }}>
            <span className="light">Street :</span> {user.address.street}
          </p>
          <p style={{ marginLeft: "78px" }}>
            <span className="light">Suite :</span>{user.address.suite}
          </p>
          <p style={{ marginLeft: "86px" }}>
            <span className="light">City :</span> {user.address.city}
          </p>
          <p style={{ marginLeft: "54px" }}>
            <span className="light">Zipcode :</span> {user.address.zipcode}
          </p>
        </div>
        
        <div id="map" className="map">
          <figure>
            <Map />
            <figcaption>
              Lat : {parseFloat(user.address.geo.lat)} , Lng :{" "}
              {parseFloat(user.address.geo.lng)}
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Details;
