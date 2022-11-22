import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import GiveEntriesComponent from "../component/GiveEntriesComponent";

const GiveEntriesContainer = ({ data, isLoggedIn }) => {
  const [tournamentData, setTournamentData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.setItem("erMsg", "Please login to give entry.");
      history.push("/login");
    }
  }, []); // eslint-disable-line

  if (new Date(data?.resultID[0]?.eventStartDate) < new Date())
    history.push("/home");

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setTournamentData(data);
      localStorage.setItem("Ul", JSON.stringify(data));
    }
  }, [data]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {tournamentData ? (
        <GiveEntriesComponent tournamentData={tournamentData} />
      ) : (
        "Loading"
      )}
    </Box>
  );
};

export default GiveEntriesContainer;
