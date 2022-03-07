import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useRef } from "react";
import RegisterForm from "./RegisterForm";
import { Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
export default function Register() {
  const childFunc = useRef();
  const [activeStep, setActiveStep] = React.useState(0);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [dob, setDOB] = React.useState("");
  const [errorClass, setErrorClass] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [verifyCode, setverifyCode] = React.useState("");
  
  const useStyles = makeStyles(() => ({
    step: {
      "&$completed": {
        color: "#43a047",
      },
      "&$active": {
        color: "#f44336",
      },
    },
    active: {}, //needed so that the &$active tag works
    completed: {},
  }));

  const classes = useStyles();

  const steps = [
    {
      phase: "",
      component: (
        <RegisterForm
          childFunc={childFunc}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          email={email}
          setEmail={setEmail}
          dob={dob}
          setDOB={setDOB}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          verifyCode={verifyCode}
          setverifyCode={setverifyCode}
          errorClass={errorClass}
          setErrorClass={setErrorClass}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
        />
      ),
    },
  ];

  const handleNext = (event) => {
    if (activeStep === 0) {
      childFunc.current();
    }
    if(errorMessage === ""){
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ margin: "1rem",
     }}>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
      {/*   <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label.phase} {...stepProps}>
                <StepLabel
                  StepIconProps={{
                    classes: {
                      root: classes.step,
                      completed: classes.completed,
                      active: classes.active,
                      disabled: classes.disabled,
                    },
                  }}
                  {...labelProps}
                >
                  {label.phase}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper> */}
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Typography
          variant="h4"
          align="center"
          sx={{
            textTransform: "uppercase",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
            
          }}
        >
          {steps[activeStep].phase}
        </Typography>
        <Divider />
      </Box>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed!</Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {steps[activeStep].component}
        <Box
            sx={{ display: "flex", flexDirection: "row", marginTop: "-1rem",
          
          }}
          >
           {/*  <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button
              onClick={handleNext}
              disabled={
                (activeStep === 0 && !email) ||
                (activeStep === 1 && (verifyCode ? true : false))
              }
            >
              {activeStep === steps.length - 1 ? "Finish" : "Continue"}
            </Button> */}
          </Box> 
        </React.Fragment>
      )}
    </Box>
  );
}
