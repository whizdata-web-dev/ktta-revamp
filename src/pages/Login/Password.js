/* This component is used for authenticating user with OTP
 and asking to set password before registration.
 */
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useHistory } from "react-router-dom";
import Payment from "./Payment";
// import "./login/LoginStyles.css";
import {
  Box,
  Button,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Password = (props) => {
  const history = useHistory();

  // stated for OTP password confirm and phone number
  const [passwordReg, setPasswordReg] = useState([
    {
      password: "",
      cPassword: "",
      isValidUser: false,
      isBackClicked: false,
      errorMessage: "",
      message: "",
    },
  ]);
  const [OTP, setOTP] = useState("");
  const handleRegSubmit = (event) => {
    //checking password confirm pwd and OTP is valid
    // if valid setting isAuthenticated state to true
    //so that payment gateway if rendered
    // If any error - error message is displayed to user
    event.preventDefault();

    String(passwordReg.password).length > 5 &&
    passwordReg.password === passwordReg.cPassword &&
    OTP === String(props.regValues.verifyCode)
      ? setPasswordReg({ isValidUser: true }) // Setting auth status true
      : setPasswordReg({ errorMessage: "Mismatch! Please try again" });

    if (OTP === String(props.regValues.verifyCode)) {
      passwordReg.password === passwordReg.cPassword
        ? setPasswordReg({ isValidUser: true })
        : setPasswordReg({
            ...passwordReg,
            errorMessage: "Password mismatch with confirm password!",
          });
    } else {
      String(OTP).length < 4
        ? setPasswordReg({
            ...passwordReg,
            errorMessage: "4 digit OTP required!",
          })
        : setPasswordReg({
            ...passwordReg,
            errorMessage: "OTP mismatch!",
          });
    }
  };

  // handling user entered values in state
  const handleInputChange = (event) => {
    setPasswordReg({
      ...passwordReg,
      [event.target.name]: event.target.value,
      error: "",
      errorMessage: "",
    });
  };

  // on back button clicked rendering registration component using onchange
  const handleBackButton = () => {
    props.onChange(null);
  };
  const otpInputChange = (event) => {
    setOTP(event);
    setPasswordReg({
      ...passwordReg,
      errorMessage: "",
    });
  };

  return (
    <Grid
      sx={{
        width: "100%",
      }}
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
    >
      <CardContent>
        {/* checking is authenticated state - otp and password 
          if so payment gateway is rendered */}
        {passwordReg.isValidUser ? (
          <Payment />
        ) : (
          <Grid
            container
            spacing={{ xs: 0, md: 0 }}
            style={{
              overflow: "hidden",
            }}
          >
            <form onSubmit={handleRegSubmit}>
              <Grid item xs={12} sm={12} md={12}>
                <CardHeader
                  style={{
                    textAlign: "center",
                    width: "fit-content",
                    margin: "0 -1rem",
                  }}
                  // avatar={
                  //   <Avatar
                  //     className='rotateName'
                  //     sx={{ bgcolor: "orangered" }}
                  //   >
                  //     <label
                  //       style={{
                  //         margin: "1px",
                  //       }}
                  //     >
                  //       {props.regValues.firstName[0]}
                  //     </label>
                  //   </Avatar>
                  // }
                  title={
                    <Typography
                      variant='h5'
                      sx={{ textTransform: "uppercase" }}
                    >
                      Verify your Account
                    </Typography>
                  }
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                {props.regValues.verifyCode ? (
                  <p
                    style={{
                      color: "green",
                      fontSize: "14px",
                      marginBottom: "1px",
                    }}
                  >
                    Verification Code has been sent to {props.regValues.email}
                  </p>
                ) : (
                  ""
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <OtpInput
                    id='paymentOTP'
                    inputStyle={{
                      border: "1px solid transparent",
                      borderRadius: "8px",
                      width: "3rem",
                      margin: "1rem 0",
                    }}
                    autoFocus
                    value={OTP}
                    onChange={otpInputChange}
                    OTPLength={4}
                    separator={<span>&nbsp;</span>}
                    secure
                  ></OtpInput>
                </div>
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  type='password'
                  required
                  value={passwordReg.password}
                  label='New Password'
                  sx={{ margin: "0.5rem 0" }}
                  name='password'
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  id='cPassword'
                  name='cPassword'
                  type='password'
                  required
                  value={passwordReg.cPassword}
                  label='Confirm Password'
                  sx={{ margin: "0.5rem 0" }}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12}>
                {passwordReg.errorMessage ? (
                  <p
                    style={{
                      color: "orangered",
                      fontSize: "14px",
                    }}
                  >
                    {passwordReg.errorMessage}
                  </p>
                ) : (
                  ""
                )}
                <Box sx={{ margin: "0.5rem 0" }}>
                  <button
                    className='signup login-button'
                    id='btnRegSubmit'
                    type='submit'
                  >
                    Submit
                  </button>
                </Box>

                <Button
                  className='signin'
                  variant='text'
                  onClick={handleBackButton}
                  sx={{ margin: "0.5rem 0" }}
                >
                  Back
                </Button>
              </Grid>
            </form>
          </Grid>
        )}
      </CardContent>
    </Grid>
  );
};

export default Password;
