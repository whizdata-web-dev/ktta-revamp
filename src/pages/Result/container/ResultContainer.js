import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { decryptData } from "../../../assets/utils/functions";
import TournamentContainer from "./TournamentContainer";

const ResultContainer = () => {
  const params = useParams();

  const [eventName, setEventName] = useState("");
  const [eventList, setEventList] = useState("");
  const [result, setResult] = useState([]);

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
    setResult([]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const { eventList, resultID } = decryptData(localStorage.getItem("result"));
    setEventList(
      eventList
        .filter((event) => event.tournamentId === params.tournamentId)[0]
        .events.sort()
    );
    setResult(resultID.filter((data) => data._id === params.tournamentId)[0]);
    console.log("resultContainer called", eventName);
    return () => {
      setEventList("");
      setResult([]);
    };
  }, [params.tournamentId, eventName]);

  return (
    <>
      <TournamentContainer
        eventList={eventList}
        result={result}
        tournamentId={params.tournamentId}
        eventName={eventName}
        handleEventNameChange={handleEventNameChange}
      />
    </>
  );
};

export default ResultContainer;
