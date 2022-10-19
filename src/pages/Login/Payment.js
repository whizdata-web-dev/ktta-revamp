/* This component is used for Payment for registration.
Payment gateway using Razorpay
*/
import React, { useState } from "react";
import useRazorpay from "react-razorpay";
import { useHistory } from "react-router";
import { RequestData } from "../../assets/utils/RequestData";

const Payment = (props) => {
  const [message, setMessage] = useState("");
  const Razorpay = useRazorpay();

  const history = useHistory();

  // razor pay for payment while registering
  React.useEffect(() => {
    handleRegPayment(); // Payment gateway call in useeffect
  }, [props && props.playerDetails.verificationCode]); // eslint-disable-line

  const registerPlayer = async (transactionId) => {
    //parameters passed as object to HTTP method POST
    let content = {
      caller: process.env.REACT_APP_CALLER,
      userName: props.playerDetails && props.playerDetails.userName,
      verificationCode:
        props.playerDetails && props.playerDetails.verificationCode,
      emailAddress: props.playerDetails && props.playerDetails.emailAddress,
      password: props.playerDetails && props.playerDetails.password,
      gender: props.playerDetails?.gender,
      clubNameId: "",
      regOverride: true,
      transactionID: transactionId, // this is generated on succesfull transaction
      transactionAmount: process.env.REACT_APP_DEFAULT_AMOUNT_LABEL,
      approvalCode: process.env.REACT_APP_CALLER,
      role: "Player",
      academy: "None",
      associationId: process.env.REACT_APP_ASSOCIATION_ID,
      phoneNumber: props.playerDetails && props.playerDetails.phoneNumber,
      dob: props.playerDetails && props.playerDetails.dob,
    };
    // Calling HTTP method by passing Api Type and Api URL and object params
    await RequestData("POST", "playerRegisterUnderAssoc", content)
      // Getting the Response object which holds the data of player registration
      .then((response) => {
        //Checking weather response data is null
        if (response.result.data.status !== "failure") {
          setMessage(response.result.message);
          //   setMessage(
          //     "Registration Succesfull! Please Login to subscribe the tournament."
          //   );
          localStorage.setItem("sMsg", response.result.message);
          setTimeout(() => {
            history.push("/home");
          }, 4000);
        } else if (response.result.data.status === "failure") {
          // setMessage(response.result.message);
          localStorage.setItem("erMsg", response.result.message);
          setTimeout(() => {
            window.location.reload();
          }, 6000);
        } else {
          // setMessage("Something went wrong! Please try again later.");
          localStorage.setItem(
            "erMsg",
            "Something went wrong! Please try again later."
          );
          setTimeout(() => {
            window.location.reload();
          }, 6000);
        }
      })
      .catch((error) => {
        error && error.result.message
          ? setMessage(error.result.message)
          : setMessage("Registration failed! Please try again later.");
      });
  };
  // Payment gateway at the time of registration
  const handleRegPayment = async () => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_PAYMENT_KEY_ID, // ID from razor pay account
      amount: process.env.REACT_APP_DEFAULT_AMOUNT, //Constant amount declared in HTTP method
      currency: "INR",
      name: process.env.REACT_APP_CALLER,
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      handler: (response) => {
        if (response && response.razorpay_payment_id) {
          // On razor pay response setting transaction id using usestate
          registerPlayer(response.razorpay_payment_id); // register player on registration amount paid
        }
      },
      prefill: {
        //name and email id passed as props from registration component
        name: props.userName,
        email: props.userId,
        contact: props.phoneNumber,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);
    // On payment failure showing the issue to the player
    rzp1.on("payment.failed", function (response) {
      setMessage(`${response.error.reason}: ${response.error.description}`);
    });

    rzp1.open();
  };

  return (
    <div>
      <p
        style={{
          fontSize: "18px",
        }}
      >
        {message}
      </p>
    </div>
  );
};

export default Payment;
