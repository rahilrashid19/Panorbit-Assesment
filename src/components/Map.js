import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ lat, lng }) => {
  const containerStyle = {
    width: "100%",
    height: "400px",
    margin: "2rem",
    borderRadius: "1rem",
  };

  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDnLBOuCm4KUSMtWV9uaPCxAbn-ITbTNSA">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
