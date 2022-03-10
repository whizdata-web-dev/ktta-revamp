/* This functional component is used to get the subscription tournament list 
for the logged in users based on upcoming tournaments with event name and price */
import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import {
  RequestData,
  urlConsts,
} from "../../../../../assets/utils/RequestData";
import useRazorpay from "react-razorpay";
// import "../../Register/login/LoginStyles.css";

import { handleTournamentId } from "../../../../../assets/utils/UserLoginContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, eventName, theme) {
  return {
    fontWeight:
      eventName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const SubscribeTournament = ({ open, handleClose, getUser }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // constant states declared for api response
  const [subscribeTournamentData, setSubscribeTournamentData] = useState({
    events: [],
    eventFees: [],
  });
  // constant state for error / success message
  const [message, setMessage] = useState("");
  // Constant state used to get total amount based on check uncheck
  const [totalAmount, setTotalAmount] = useState(0);
  // constant state for event names response from api
  const [eventName, setEventName] = useState([]);

  const history = useHistory();
  const [checked, setChecked] = useState([]);
  const tournamentId = handleTournamentId.getTournId()
    ? handleTournamentId.getTournId()
    : "";
  const Razorpay = useRazorpay();

  //razor pay for payment
  // api response for testing
  const events = [
    "HBU11",
    "HGU11",
    "BU13",
    "GU13",
    "BU15",
    "GU15",
    "BU17",
    "GU17",
    "BU19",
    "GU19",
    "Men",
    "Women",
    "NMS",
  ];
  const eventFees = [
    "200",
    "200",
    "200",
    "200",
    "200",
    "200",
    "300",
    "300",
    "300",
    "300",
    "300",
    "300",
    "300",
  ];
  const subscribedEvents = [
    "0",
    "200",
    "0",
    "0",
    "0",
    "0",
    "0",
    "300",
    "0",
    "0",
    "0",
    "0",
    "0",
  ];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setEventName(typeof value === "string" ? value.split(",") : value);
    let amountList = 0;
    value.forEach((val, index) => {
      amountList += parseInt(eventFees[events.indexOf(val)]);
    });
    setTotalAmount(amountList);
  };

  // This is to call renewal player api if player payment is expired
  //Transaction id with amount is passed from payment gateway after payment is successfull
  const paySubscribtion = async (transactionId) => {
    // variables to pass subscribed and unsubscribed data to api
    let subData = [],
      unSubData = [];
    events &&
      events.map((eventName, index) => {
        checked[index] === true
          ? (subData[index] = eventName)
          : (unSubData[index] = eventName);
      });
    //parameters passed as object to HTTP method POST
    let content = {
      caller: urlConsts.caller,
      data: {
        userId: getUser,
        tournamentId: tournamentId,
        subscribeID: subData,
        unSubscribeID: unSubData,
        transactionID: transactionId,
        transactionAmount: totalAmount,
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
          // Setting success message
          alert("Subscription Sucessfull");
          //redirection to home component
        } else {
          response.result.message
            ? setMessage(response.result.message)
            : setMessage("Failed");
        }
      })
      .catch((er) => {
        er && er.result && er.result.message
          ? setMessage(er.result.message)
          : setMessage("Failed Please try again later");
      });
  };

  //Constant asynchronous api method call used to fetch data for subscribed tournaments
  // using Axios GET method

  const getSubscribeTournamentList = async () => {
    await RequestData(
      "GET",
      `eventListUnderTourn?caller=KTTA1&apiKey=dd5e611bf286042db7257ee998e5112b&tournamentId=WeLEm5QACmyGCwLHS&userId=qoJ7c8Mr27ZnGZH5a`
    )
      // `eventListUnderTourn?caller=${urlConsts.caller}&apiKey=${urlConsts.apiKey}&tournamentId=${tournamentId}&userId=${urlConsts.filterData}`
      .then((response) => {
        // Checking the response before changing the state
        if (response && response.result) {
          // setSubscribeTournamentData(response.result.eventFeeSettings);
          // setEventName(response.result.eventFeeSettings.events);
        } else {
          // error message in case of no response
          setMessage("Something went wrong! Please try again later.");
        }
      })
      .catch((error) => {
        // error in api call
        error.result && error.result.message
          ? setMessage(error.result.message)
          : setMessage("Failed.Please try again later");
      });
  };

  // This is for the integration of payment gateway using Rasor pay
  const handlePayment = async () => {
    let options = {};
    if (totalAmount > 0) {
      options = {
        key: urlConsts.paymentKeyId, // ID from razor pay account
        amount: totalAmount * 100, // total amount to pay
        currency: "INR",
        name: urlConsts.caller,
        description: "Test Transaction",
        image: ``,
        handler: (response) => {
          // On razor pay response setting transaction id using usestate
          paySubscribtion(response.razorpay_payment_id);
          // need to send transaction id to subscribe api
        },
        prefill: {
          // name and email id passed as props from registration component
          name: getUser.userName,
          email: getUser.userId,
          contact: getUser.phoneNumber,
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#332861",
        },
      };
    } else {
      setMessage("Select atleast one event to subscribe!");
    }
    const rzp1 = new Razorpay(options);
    // On payment failure showing the issue to the user
    rzp1.on("Payment Failed", function (response) {
      setMessage(response.error.description);
      // redirecting to login
    });
    rzp1.open();
  };

  useEffect(() => {
    const eventsSubscribed = subscribedEvents
      .map((d, index) => {
        if (d != 0) {
          return events[index];
        }
      })
      .filter((doc) => doc !== undefined);
    setEventName(eventsSubscribed);
    setTotalAmount(
      subscribedEvents.reduce(
        (partialSum, a) => parseInt(partialSum) + parseInt(a),
        0
      )
    );
  }, [getUser && getUser._id]);

  return (
    <Box>
      <Dialog
        fullScreen={fullScreen}
        open={open && open === "give"}
        aria-labelledby='responsive-dialog-title'
      >
        <DialogTitle id='responsive-dialog-title'>
          Choose your events
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id='demo-multiple-chip-label'>
                Select Events
              </InputLabel>
              <Select
                labelId='demo-multiple-chip-label'
                id='demo-multiple-chip'
                multiple
                value={eventName}
                onChange={handleChange}
                input={
                  <OutlinedInput
                    id='select-multiple-chip'
                    label='Select Events'
                  />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {events.map((event, index) => (
                  <MenuItem
                    key={event}
                    value={event}
                    style={getStyles(event, eventName, theme)}
                  >
                    <Grid container>
                      <Box sx={{ float: "left" }}>{event}</Box>
                      <Box sx={{ flexGrow: 1 }}></Box>
                      <Box sx={{ float: "right" }}>{eventFees[index]}</Box>
                    </Grid>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Table sx={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant='h5'>Event Name</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant='h5'>Fee</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              {eventName.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ margin: "0 1rem", border: "none" }}>
                    {row}
                  </TableCell>
                  <TableCell
                    sx={{
                      margin: "0 1rem",
                      border: "none",
                      fontWeight: "bolder",
                    }}
                  >
                    ₹&nbsp;{eventFees[events.indexOf(row)]}
                  </TableCell>
                </TableRow>
              ))}
              <Divider />
              <TableRow>
                <TableCell
                  sx={{
                    margin: "0 1rem",
                    border: "none",
                    fontWeight: "bolder",
                  }}
                >
                  Total
                </TableCell>
                <TableCell
                  sx={{
                    margin: "0 1rem",
                    border: "none",
                    fontWeight: "bolder",
                  }}
                >
                  ₹&nbsp;{totalAmount}
                </TableCell>
              </TableRow>
            </Table>
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions> */}
        <Box sx={{ margin: "1rem" }}>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button
            autoFocus
            variant='contained'
            disabled={!totalAmount}
            onClick={handlePayment} //handling payment onclick by rendering razor pay
            sx={{ float: "right" }}
          >
            Pay&nbsp;-&nbsp;₹&nbsp;{totalAmount}
          </Button>
        </Box>
        {/* </DialogActions> */}
      </Dialog>
    </Box>
  );
};
export default SubscribeTournament;
