import { useState } from "react";
import { Box, Card, CardContent, Grid } from "@mui/material";
import ContactSecretory from "./contactSecretory/ContactSecretory";
import ContactForm from "./contactForm/ContactForm";
import Map from "./contactMap/Map";

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
    <Box
      sx={{
        padding: { md: "2rem 1rem" },
        background: "#f6f5f7",
      }}
    >
      <Box
        className='relative w-full rounded h-600-px'
        sx={{ display: { xs: "block", md: "flex" } }}
      >
        <Box className='w-full px-4'>
          <Box className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded'>
            <Map coordinates={coordinates} />
          </Box>
        </Box>
        <ContactSecretory
          contactData={contactData}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
}
