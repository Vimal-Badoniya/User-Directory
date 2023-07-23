import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import { useSelector } from "react-redux";


mapboxgl.accessToken =
  "pk.eyJ1IjoiYmhhZ2F0c2luZ2gyMzAzMTkzMSIsImEiOiJjbGtlOHJ6b28wMXhmM2dvNWU4Z291dXZmIn0.yB6h0FNJBtkTKto0dFI5fA";

const Map = () => {
    const user = useSelector((state)=>{return state.currentUser})
  useEffect(() => {
     console.log(parseFloat(user.address.geo.lat) , typeof(parseFloat(user.address.geo.lat)))
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11", 
      center: [-74.006, 40.7128], 
      zoom: 10,
    });

    
    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: "300px", height: "300px" }}></div>;
};

export default Map;
