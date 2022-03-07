import React, { useState } from "react";
import Captcha from "./Captcha";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Grid,
  Button,
} from "@mui/material";

const LoginForm = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  age,
  setAge,
  email,
  setEmail,
  setAllowSubmit,
  success,
  setSuccess,
}) => {
  const myFunction = (content) => {
    var x = document.getElementById("snackbar");
    x.innerHTML = content;
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  };

  const ValidateEmail = (event) => {
    const valid =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@([a-z]+)+(?:\.[a-zA-Z0-9-]+)*$/.test(
        event.target.value
      )
        ? true
        : false;
    if (!valid) {
      alert("Invalid email entered!");
      setEmail("");
    }
  };

  const onlyAlphabets = (event) => {
    var ASCIICode = event.target.value;
    const handler =
      "set" +
      event.target.id.charAt(0).toUpperCase() +
      event.target.id.slice(1);
    if (event.target.value === "")
      handler === "setFirstName" ? setFirstName("") : setLastName("");
    if (
      (ASCIICode.charCodeAt(ASCIICode.length - 1) > 64 &&
        ASCIICode.charCodeAt(ASCIICode.length - 1) < 91) ||
      (ASCIICode.charCodeAt(ASCIICode.length - 1) > 96 &&
        ASCIICode.charCodeAt(ASCIICode.length - 1) < 123) ||
      ASCIICode.charCodeAt(ASCIICode.length - 1) === 8 ||
      ASCIICode.charCodeAt(ASCIICode.length - 1) === 32
    ) {
      handler === "setFirstName"
        ? setFirstName(event.target.value)
        : setLastName(event.target.value);
      return true;
    }
    return false;
  };

  const verifyCallback = (recaptchaToken) => {
    if (recaptchaToken) {
      setSuccess(true);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (success && firstName && email && lastName && age) {
      setAllowSubmit(false);
    } else if (!success) {
      setAllowSubmit(true);
      myFunction("Captcha verification required!");
    } else {
      setAllowSubmit(true);
      myFunction("All fields Mandatory");
    }
  };

  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
    >
      <CardContent
        sx={{
          maxWidth: { sm: "100vw", md: "40vw" },
        }}
      >
        <TextField
          type='text'
          id='firstName'
          label='First Name'
          variant='filled'
          required
          value={firstName}
          inputProps={{
            maxLength: 30,
            style: { backgroundColor: "#fff" },
          }}
          sx={{
            width: "100%",
            margin: "1rem 0",
            backgroundColor: "#fff",
          }}
          onChange={(event) => {
            return onlyAlphabets(event);
          }}
          onKeyUp={() =>
            firstName && email && lastName && age
              ? setAllowSubmit(true)
              : setAllowSubmit(false)
          }
        />
        <TextField
          type='text'
          id='lastName'
          label='Last Name'
          variant='filled'
          required
          value={lastName}
          inputProps={{
            maxLength: 30,
            style: { backgroundColor: "#fff" },
          }}
          sx={{
            width: "100%",
            margin: "1rem 0",
            backgroundColor: "#fff",
          }}
          onChange={(event) => {
            return onlyAlphabets(event);
          }}
          onKeyUp={() =>
            firstName && email && lastName && age
              ? setAllowSubmit(true)
              : setAllowSubmit(false)
          }
        />
        <TextField
          type='email'
          id='email'
          label='Email Address'
          variant='filled'
          required
          inputProps={{
            maxLength: 30,
            style: { backgroundColor: "#fff" },
          }}
          sx={{
            width: "100%",
            margin: "1rem 0",
            backgroundColor: "#fff",
          }}
          value={email}
          onBlur={(event) => ValidateEmail(event)}
          onChange={(event) => setEmail(event.target.value)}
          onKeyUp={() =>
            firstName && email && lastName && age
              ? setAllowSubmit(true)
              : setAllowSubmit(false)
          }
        />
        <TextField
          type='number'
          id='age'
          label='Age'
          variant='filled'
          required
          inputProps={{
            maxLength: 30,
            style: { backgroundColor: "#fff" },
          }}
          sx={{
            width: "100%",
            margin: "1rem 0",
            backgroundColor: "#fff",
          }}
          value={age}
          onChange={(event) => {
            setAge(event.target.value);
          }}
          onKeyUp={() =>
            firstName && email && lastName && age
              ? setAllowSubmit(true)
              : setAllowSubmit(false)
          }
        />
        {!success && (
          <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justifyContent='center'
          >
            <div style={{ margin: "1rem 0" }}>
              <Captcha verifyCallback={verifyCallback} />
            </div>
          </Grid>
        )}
      </CardContent>
    </Grid>
  );
};

export default LoginForm;
