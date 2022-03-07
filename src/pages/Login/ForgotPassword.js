/* 
This component is used for Password reset
The user is validated with email address - OTP is sent to email 
On validation player is allowed to create new Password
*/
import React, { useState } from "react";
import { RequestData, urlConsts } from "../../assets/utils/RequestData";
import OtpInput from "react-otp-input";
import { useHistory } from "react-router";
import { Box, Button, CardHeader, TextField, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import pwdLogo from "../../assets/img/pwd.gif";

export default function ResetPassword(props) {
  const [resetPwdValues, setresetPwdValues] = useState([
    {
      email: "",
      password: "",
      confirmPassword: "",
      verificationCode: "",
      message: "",
      errorClass: "",
      errorMessage: "",
    },
  ]);
  const [OTP, setOTP] = useState("");

  const history = useHistory();
  // This method is for sending the OTP for email address
  const sendOTPClick = (event) => {
    event.preventDefault();
    if (isNaN(resetPwdValues.email)) {
      const pattern = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
      //pattern check for Email ID
      //check is based on ternary operator
      // if pattern mismatch then button animation and error message is displayed to user.
      !pattern.test(resetPwdValues.email)
        ? setresetPwdValues({
            errorClass: "emailError",
            errorMessage: "Invalid Email Address!",
          })
        : getPasswordReset(); // this is the http api method for OTP
    }
  };

  const confirmClick = (event) => {
    event.preventDefault();
    if (OTP === resetPwdValues.verificationCode) {
      resetPwdValues.password === resetPwdValues.confirmPassword
        ? getPasswordResetValidation()
        : setresetPwdValues({
            ...resetPwdValues,
            errorClass: "passwordError",
            errorMessage: "Password mismatch with confirm password!",
          });
    } else {
      String(OTP).length < 4
        ? setresetPwdValues({
            ...resetPwdValues,
            errorClass: "OTPLengthError",
            errorMessage: "4 digit OTP required!",
          })
        : setresetPwdValues({
            ...resetPwdValues,
            errorClass: "OTPError",
            errorMessage: "OTP mismatch!",
          });
    }
  };

  // This is the asynchronous method used to get Previous tournaments data
  //based by calling HTTP GET Api method
  const getPasswordReset = async () => {
    // Calling HTTP method by passing Api Type and Api URL
    await RequestData(
      "GET",
      `otpForgotPassword?caller=${urlConsts.caller}&apiKey=${urlConsts.apiKey}&emailId=${resetPwdValues.email}`
    )
      // Getting the Response object which holds the data of Previous tournaments
      .then((response) => {
        //Checking weather response data is null
        if (response.result) {
          //Changing the state of tournament data - setting state to response data
          if (response.result.message === "User is invalid") {
            setresetPwdValues({
              error: "errorButton",
              errorMessage: "Invalid user",
            });
          } else {
            //Setting verification code to state
            setresetPwdValues({
              verificationCode: response.result.verificationCode,
              message: response.result.message,
            });
          }
        }
      })
      .catch((er) => {
        setresetPwdValues({
          errorMessage: er.result,
        });
      });
  };
  // This is the asynchronous method used to get password validation data
  //based by calling HTTP POST Api method
  const getPasswordResetValidation = async () => {
    let content = {
      //Constant declared in HTTP method
      caller: urlConsts.caller,
      // parameters sent as object to HTTP method.
      // email address password and verification code is taken from state
      userId: resetPwdValues.email,
      password: resetPwdValues.password,
      verificationCode: resetPwdValues.verificationCode,
    };
    // Calling HTTP method by passing Api Type and Api URL
    await RequestData("POST", "setNewPassword", content)
      // Getting the Response object which holds the data of Previous tournaments
      .then((response) => {
        //Checking weather response data is null
        if (response.result) {
          history.push("/login");
        } else {
          setresetPwdValues({
            error: "errorButton",
            errorMessage: response.result,
          });
        }
      })
      .catch((er) => {
        setresetPwdValues({
          errorClass: "errorButton",
          errorMessage: er.result,
        });
      });
  };
  // This is on cancel redirect to login - changing parent state-login to false
  const cancelFgtPwd = () => {
    props.onChange(false);
  };

  const otpInputChange = (event) => {
    setOTP(event);
    setresetPwdValues({
      ...resetPwdValues,
      errorMessage: "",
    });
  };
  // This is for sending OTP to email by taking email address from player
  const renderResetForm = () => {
    return (
      <form
        className='login-form'
        style={{
          marginTop: "40%",
        }}
        onSubmit={sendOTPClick}
      >
        <h3 className='login-h1'>Password Reset</h3>
        <TextField
          id='emailId'
          required
          variant='filled'
          className={
            resetPwdValues.errorClass === "emailError" ? "error" : "textWidth"
          }
          label='Email Address'
          value={resetPwdValues.email}
          sx={{
            paddingTop: "1rem",
          }}
          onChange={(event) => {
            setresetPwdValues({
              email: event.target.value,
              error: "",
              errorMessage: "",
              emailError: "",
            });
          }}
        />
        <div>
          {resetPwdValues.errorClass === "emailError" &&
          resetPwdValues.errorMessage &&
          !resetPwdValues.verificationCode ? (
            <p
              style={{
                color: "orangered",
                fontSize: "14px",
              }}
            >
              {resetPwdValues.errorMessage}
            </p>
          ) : (
            ""
          )}
          <Button
            block
            type='submit'
            className={
              resetPwdValues.error ? resetPwdValues.error : "forgotPwd"
            }
            style={{
              margin: "1rem 8rem",
              fontWeight: "bolder",
              padding: "10px 40px",
              marginBottom: "2px",
              color: "white",
              borderRadius: "30px",
            }}
          >
            Next
          </Button>
          <Button
            onClick={cancelFgtPwd}
            style={{
              border: "none",
              background: "white",
              margin: "0 0.5rem",
            }}
            className='signin'
          >
            <Typography
              style={{
                fontWeight: "bold",
                background: "white",
                textDecorationLine: "underLine",
              }}
            >
              Sign In
            </Typography>
          </Button>
        </div>
      </form>
    );
  };
  // This is to validate OTP and allow player to set New Password
  const renderOTPConfirmationForm = () => {
    return (
      <form
        className='login-form'
        onSubmit={confirmClick}
        style={{
          textAlign: "center",
          marginTop: "15%",
        }}
      >
        <CardHeader
          style={{
            color: "orangeRed",
            textAlign: "left",
          }}
          // /broken-image.jpg
          avatar={
            <Avatar
              src={pwdLogo}
              sx={{
                height: "4rem",
                width: "4rem",
              }}
            />
          }
        />
        <h3 className='login-h1'>Verify your Account</h3>
        {/* OTP type input field to filling OTP recieved in email */}
        {resetPwdValues.verificationCode ? (
          <p
            style={{
              color: "green",
              fontSize: "14px",
              marginBottom: "1px",
            }}
          >
            {resetPwdValues.message}
          </p>
        ) : (
          ""
        )}
        <Box>
          <OtpInput
            inputStyle={{
              border: "1px solid transparent",
              borderRadius: "12px",
              width: "3rem",
              margin: "0.5rem 0",
            }}
            autoFocus
            value={OTP}
            onChange={otpInputChange}
            OTPLength={4}
            otpType='number'
            separator={<span>&nbsp;</span>}
            secure
          />
        </Box>
        <TextField
          required
          type='password'
          label='New Password'
          variant='filled'
          onChange={(event) =>
            setresetPwdValues({
              ...resetPwdValues,
              password: event.target.value,
              errorMessage: "",
            })
          }
          sx={{
            margin: "0.5rem 0",
          }}
        />

        <TextField
          required
          id='cPassword'
          type='password'
          variant='filled'
          label='Confirm Password'
          onChange={(event) =>
            setresetPwdValues({
              ...resetPwdValues,
              confirmPassword: event.target.value,
              errorMessage: "",
            })
          }
          sx={{
            margin: "0.5rem 0",
          }}
        />
        {resetPwdValues.errorMessage ? (
          <p
            style={{
              color: "orangered",
              fontSize: "14px",
            }}
          >
            {resetPwdValues.errorMessage}
          </p>
        ) : (
          ""
        )}
        <Button
          block
          type='submit'
          style={{
            borderRadius: "20px",
            color: "white",
            margin: "1rem 0.5rem",
            padding: "10px 55px",
            marginBottom: "2px",
            fontweight: "bold",
            letterspacing: "1px",
            texttransform: "uppercase",
            transition: "transform 80ms ease-in",
          }}
          className={resetPwdValues.error ? resetPwdValues.error : "forgotPwd"}
        >
          Submit
        </Button>
        <Button
          onClick={cancelFgtPwd}
          style={{
            border: "none",
            background: "white",
            margin: "0 0.5rem",
            padding: "0 35%",
          }}
          className='signin'
        >
          <Typography
            style={{
              fontWeight: "bold",
              background: "white",
              textDecorationLine: "underLine",
              marginBottom: "2px",
            }}
          >
            Sign In
          </Typography>
        </Button>
      </form>
    );
  };

  return (
    <Box
      style={{
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {!resetPwdValues.verificationCode
        ? // renderResetForm is returned in case of OTP is not sent
          renderResetForm()
        : // renderOTPConfirmationForm is returned in case of OTP is not Confirmed
          renderOTPConfirmationForm()}
    </Box>
  );
}
