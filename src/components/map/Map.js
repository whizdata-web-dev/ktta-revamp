import React from "react";
import { Map as GoogleMap, GoogleApiWrapper, Marker } from "google-maps-react";
import { Grid } from "@mui/material";

const Map = ({ mapWidth, location }) => {
  const mapStyles = {
    width: `${mapWidth - 30}px`,
    maxHeight: "20vh",
  };
  return (
    <Grid container>
      <GoogleMap
        google={window.google}
        zoom={16}
        style={mapStyles}
        initialCenter={{ lat: location.lat, lng: location.lng }}
      >
        <Marker position={{ lat: location.lat, lng: location.lng }} />
      </GoogleMap>
    </Grid>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBQdsbDsotpBkPArd2NRovyFDE9tLbDYDo",
})(Map);
