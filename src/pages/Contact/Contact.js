import { useState } from "react";
import { Box, Card, CardContent, Grid } from "@mui/material";
import ContactSecretory from "./contactSecretory/ContactSecretory";
import ContactForm from "./contactForm/ContactForm";

import { contactData } from "../../assets/utils/ContactData";

export default function Contact() {
  const [coordinates, setCoordinates] = useState({
    lat: 12.9686628,
    lng: 77.5925965,
  });

  const handleChange = (event) => {
    setCoordinates({
      lat: event.latitude,
      lng: event.longitude,
    });
  };

  return (
    <Box sx={{ margin: { md: "1rem 0" } }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={8}>
          <Card
            sx={{
              margin: "1rem 0.5rem 1rem 1rem",
              border: "1px solid #00c853",
              borderRadius: "2px",
              maxHeight: {
                xs: "70vh",
                sm: "70vh",
                md: "140vh",
                lg: "122vh",
              },
              overflowY: "auto",
            }}
          >
            <CardContent>
              <ContactForm coordinates={coordinates} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Card
            variant='outlined'
            sx={{
              margin: "1rem 1rem 1rem 0.5rem",
              maxHeight: {
                xs: "70vh",
                sm: "70vh",
                md: "140vh",
                lg: "122vh",
              },
              overflowY: "auto",
            }}
          >
            <CardContent>
              <ContactSecretory
                contactData={contactData}
                handleChange={handleChange}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
