import React, { useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Grid } from "@mui/material";

const ContactMap = (props) => {
  const mapStyles = {
    width: "100%",
    height: "50vh",
  };
  useEffect(() => {}, [props.coordinates.lat]);
  return (
    <Grid container>
      <Map
        google={window.google}
        zoom={5.5}
        style={mapStyles}
        initialCenter={
          props ? props.coordinates : { lat: 14.45689, lng: 75.924606 }
        }
      >
        <Marker
          position={
            props ? props.coordinates : { lat: 12.9686628, lng: 77.5925965 }
          }
        />
      </Map>
    </Grid>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBQdsbDsotpBkPArd2NRovyFDE9tLbDYDo",
})(ContactMap);
