import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import FetchData from "../../../assets/utils/FetchData";
import EntriesComponent from "../component/EntriesComponent";
import {
  handleTournamentId,
  useLoginContext,
} from "../../../assets/utils/UserLoginContext";
import { useHistory } from "react-router-dom";
import LoadingComponent from "../../../assets/utils/LoadingComponent";

const EntriesContainer = () => {
  const { getLoginUser, logOut } = useLoginContext();
  const getUser = getLoginUser();
  const history = useHistory();

  const { data } = FetchData({
    method: "GET",
    url: `UpcomingTournamentsOnApiKey?caller=${process.env.REACT_APP_CALLER}&apiKey=${process.env.REACT_APP_API_KEY}&userId=${process.env.REACT_APP_USER_ID}`,
  });

  const filterData = (oldObject) => {
    let { eventList, resultID, tournamentList, ...otherProperties } = oldObject;

    eventList = eventList.filter(
      (event) => event.tournamentId === handleTournamentId.getTournId()
    )[0];

    resultID = resultID.filter(
      (event) => event._id === handleTournamentId.getTournId()
    )[0];

    tournamentList = tournamentList.filter(
      (event) => event.tournamentId === handleTournamentId.getTournId()
    )[0];

    return { ...otherProperties, eventList, resultID, tournamentList };
  };

  const [updatedData, setUpdatedData] = useState({});

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setUpdatedData(filterData(data));
    }
  }, [data]);

  // useEffect(() => {
  //   if (!getUser) {
  //     localStorage.setItem("erMsg", "Please login to give entry.");
  //     history.push("/login");
  //   }
  // }, []); // eslint-disable-line

  return (
    <Box
      sx={{
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        paddingTop: "3rem",
      }}
    >
      {Object.keys(updatedData).length > 0 ? (
        <EntriesComponent logOut={logOut} data={updatedData} user={getUser} />
      ) : (
        <LoadingComponent />
      )}
    </Box>
  );
};

export default EntriesContainer;
