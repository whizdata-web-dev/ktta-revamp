import { Box, Button, Card, Divider, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { RequestData } from "../../../assets/utils/RequestData";
import { useLoginContext } from "../../../assets/utils/UserLoginContext";
import EntriesTable from "./EntriesTable";
import useRazorpay from "react-razorpay";
import { handleTournamentId } from "../../../assets/utils/UserLoginContext";
import CreditCardIcon from "@mui/icons-material/CreditCard";

import subscribedToAll from "../../../assets/img/subscribed_to_all.jpg";
import { useHistory } from "react-router";

function subtotal(list) {
  return list.map(({ fee }) => parseInt(fee)).reduce((sum, i) => sum + i, 0);
}
const GiveEntriesComponent = ({ tournamentData }) => {
  const { getLoginUser } = useLoginContext();
  const getUser = getLoginUser();

  const [tournamentName, setTournamentName] = useState([]);
  const [eventFees, setEventFees] = useState([]);
  const [selected, setSelected] = useState([]);
  const [isSubscribedToAllEvents, setIsSubscribedToAllEvents] = useState(false);
  const [invoiceSubtotal, setInvoiceSubtotal] = useState(0);
  const [availableNumberOfEvents, setAvailableNumberOfEvents] = useState(3);
  const Razorpay = useRazorpay();

  const history = useHistory();

  const dcf = 0;
  const invoiceTotal = invoiceSubtotal + dcf;

  const getSubscribeTournamentList = async () => {
    await RequestData(
      "GET",
      `eventListUnderTourn?caller=${process.env.REACT_APP_CALLER}&apiKey=${process.env.REACT_APP_API_KEY}&tournamentId=${tournamentData.tournamentList.tournamentId}&userId=${getUser.userId}`
    )
      .then((response) => {
        if (response && response.result) {
          let feeList = [];
          const registeredEvents = response.result.data.filter((eventData) => {
            if (eventData.eventParticipants)
              return eventData.eventParticipants.includes(getUser.userId);
          });
          setAvailableNumberOfEvents(3 - registeredEvents.length);
          if (registeredEvents.length < 3) {
            response.result.data.forEach((event) => {
              if (
                !event.eventParticipants ||
                !event.eventParticipants.includes(getUser.userId)
              )
                feeList.push({
                  id: event._id,
                  name: event.abbName,
                  fullName: event.eventName,
                  fee: event.prize,
                });
            });
            if (feeList.length === 0) {
              setIsSubscribedToAllEvents(true);
            }
            setEventFees(feeList);
          } else {
            setIsSubscribedToAllEvents(true);
          }
        } else {
          localStorage.setItem(
            "erMsg",
            "Something went wrong while fetching data! Please try again later."
          );
        }
      })
      .catch((error) => {
        // error in api call
        localStorage.setItem(
          "erMsg",
          "Something went wrong! Please try again later."
        );
      });
  };

  useEffect(() => {
    if (Object.keys(tournamentData).length > 0) {
      if (!tournamentData.tournamentList) history.push("/");
      setTournamentName(tournamentData.tournamentList.tournamentName);
      getSubscribeTournamentList();
    }
  }, [tournamentData]); // eslint-disable-line

  useEffect(() => {
    // if (selected.length > 0) paymentTransaction();
    let filteredList = selected.map(
      (eventName) =>
        eventFees.filter((eventDetails) => eventName === eventDetails.name)[0]
    );
    setInvoiceSubtotal(subtotal(filteredList));
  }, [selected]); // eslint-disable-line

  const paymentTransaction = async (transactionId) => {
    // let subscribedTournamentId = selected.map(
    //   (eventName) =>
    //     eventFees.filter((eventDetails) => eventName === eventDetails.name)[0]
    //       .id
    // );

    let content = {
      caller: process.env.REACT_APP_CALLER,
      data: {
        userId: getUser.userId,
        tournamentId: handleTournamentId.getTournId(),
        subscribeID: selected,
        unSubscribeID: [],
        transactionID: transactionId,
        transactionAmount: invoiceTotal * 100,
        transactionType: "none",
        oldSubscribeID: [],
      },
    };
    // Calling HTTP method by passing Api Type and Api URL and object params
    await RequestData("POST", "eventSubscription", content)
      // Getting the Response object which holds the data of Previous tournaments
      .then((response) => {
        //Checking weather response data is null

        if (response.result) {
          window.location.reload();
          localStorage.setItem("sMsg", "Subscription sucessful!");
        } else {
          // response.result.message
          //   ? setMessage(response.result.message)
          //   : setMessage("Failed");
          console.error("Response error");
          localStorage.setItem("sMsg", "Subscription sucessful!");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // This is for the integration of payment gateway using Rasor pay
  const handlePayment = async () => {
    let options = {};
    options = {
      key: process.env.REACT_APP_RAZORPAY_PAYMENT_KEY_ID, // ID from razor pay account
      // amount: 100, // total amount to pay
      amount: invoiceTotal * 100, // total amount to pay
      currency: "INR",
      name: "Karnataka Table Tennis Association",
      description: tournamentName,
      image: ``,
      handler: (response) => {
        // On razor pay response setting transaction id using usestate
        paymentTransaction(response.razorpay_payment_id);
        // need to send transaction id to subscribe api
      },
      prefill: {
        // name and email id passed as props from registration component
        name: getUser.userName,
        email: getUser.emailAddress,
        contact: getUser.phoneNumber,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#332861",
      },
    };
    const rzp1 = new Razorpay(options);
    // On payment failure showing the issue to the user
    rzp1.on("Payment Failed", function (response) {
      localStorage.setItem("erMsg", "Payment Failed. Please try again.");
    });
    rzp1.open();
  };

  return (
    <Card sx={{ borderRadius: "4px", padding: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant='h5'>{tournamentName}</Typography>
      </Box>
      <Box sx={{ marginBlock: "1rem 1rem" }}>
        <Divider />
      </Box>
      <Box
        sx={{
          textAlign: "left",
          marginBlock: "0.5rem",
        }}
      >
        <Typography variant='body1' fontWeight={"bold"}>
          Your Unique registration Number : {getUser?.affiliationId}
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "justify",
          marginBlock: "0.5rem",
        }}
      >
        <Typography variant='body2'>
          Based on your registration details, you are eligible to play in the
          following events.Please choose your events (Select or de-select as
          desired ) and click 'Submit' to confirm your participation. You will
          recieve an email confirming your entries soon.
        </Typography>
      </Box>
      {isSubscribedToAllEvents ? (
        <Box sx={{ width: "100%" }}>
          <Typography
            fontWeight={"bold"}
            className='text-2xl'
            sx={{ textAlign: "center", marginBlock: "1rem 0" }}
          >
            Subscribed to all playable events!
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={subscribedToAll} alt='...' width={350} />
          </Box>
        </Box>
      ) : (
        <>
          <Box sx={{ marginBlock: "1rem 0.5rem" }}>
            <EntriesTable
              rows={eventFees}
              selected={selected}
              setSelected={setSelected}
              availableNumberOfEvents={availableNumberOfEvents}
              payment={{
                invoiceSubtotal,
                invoiceTotal,
                dcf,
              }}
            />
          </Box>
          <Box
            sx={{
              marginBlock: "1rem 0.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant='contained'
              disabled={invoiceSubtotal > 0 ? false : true}
              onClick={handlePayment}
              sx={{
                borderRadius: "0px",
                minWidth: "320px",
                background:
                  invoiceSubtotal > 0
                    ? "#332861 !important"
                    : "rgba(0, 0, 0, 0.26)",
                color:
                  invoiceSubtotal > 0
                    ? "#FFFFFF !important"
                    : "rgba(0, 0, 0, 0.12)",
              }}
            >
              <CreditCardIcon sx={{ marginRight: "0.5rem" }} />
              Pay Amount
            </Button>
          </Box>
        </>
      )}
    </Card>
  );
};

export default GiveEntriesComponent;
