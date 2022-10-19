import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import GiveEntriesComponent from "../component/GiveEntriesComponent";

const GiveEntriesContainer = ({ data }) => {
  const [tournamentData, setTournamentData] = useState([]);
  const history = useHistory();

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
