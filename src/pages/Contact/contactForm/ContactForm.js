import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Grid, List, TextField } from "@mui/material";
import ContactMap from "../contactMap/ContactMap";

export default function ContactForm({ coordinates }) {
  return (
    <Box
      component='form'
      sx={{
        "& .MuiTextField-root": {
          width: "100%",
          margin: "1rem 0",
        },
        margin: "1rem",
        height: "100%",
      }}
      noValidate
      autoComplete='off'
    >
      <List>
        <ContactMap coordinates={coordinates} />
      </List>
      <Box style={{ margin: "55vh 0 0 0" }}>
        <Divider sx={{ margin: "0 0 5vh 0" }} />
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            md={12}
            lg={6}
            sx={{ textAlign: { xs: "center", sm: "left", md: "left" } }}
          >
            <TextField
              required
              id='name'
              label='Name'
              placeholder='Hello World'
              variant='standard'
              sx={{ margin: "0 1rem", maxWidth: "98%" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={12}
            lg={6}
            sx={{ textAlign: { xs: "center", sm: "right", md: "right" } }}
          >
            <TextField
              required
              id='email'
              label='Email'
              placeholder='Default Value'
              helperText={
                <span style={{ color: "#d32f2f", margin: 0, float: "left" }}>
                  *your email will never be published
                </span>
              }
              variant='standard'
              sx={{ margin: "0 1rem", maxWidth: "98%" }}
            />
          </Grid>
        </Grid>
        <TextField
          id='subject'
          label='Subject'
          placeholder='Hello World'
          variant='standard'
        />
        <TextField
          id='message'
          label='Message'
          multiline
          rows={4}
          placeholder='Default Value'
        />
        <div style={{ textAlign: "center" }}>
          <Button variant='contained' color='success'>
            Submit
          </Button>
        </div>
      </Box>
    </Box>
  );
}
