import React, { useEffect, useState } from "react";
import FetchData from "../../../../../assets/utils/FetchData";
import TournamentUpdatesComponent from "../components/TournamentUpdatesComponent";

const TournamentUpdatesContainer = () => {
  const {
    data,
    loading = true,
    error,
  } = FetchData({
    method: "GET",
    url: `PastTournamentsOnApiKey?caller=KTTA1&apiKey=dd5e611bf286042db7257ee998e5112b&userId=qoJ7c8Mr27ZnGZH5a`,
  });

  const [tournamentData, setTournamentData] = useState([]);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      let tournamentList = data.resultID.slice(0, 4);
      setTournamentData(tournamentList);
    }
  }, [data]);

  return (
    <>
      <TournamentUpdatesComponent data={tournamentData} />
    </>
  );
};

export default TournamentUpdatesContainer;
