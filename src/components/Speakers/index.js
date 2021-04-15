import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
// import speakersData from "./data.js";
import SingleSpeaker from "./singleSpeaker";
import axios from "axios";

const Speakers = () => {
  const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "error",
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [speakers, setSpeakers] = useState([]);

  const [status, setStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/speakers");
        setSpeakers(response.data);
        setStatus(REQUEST_STATUS.SUCCESS);
      } catch (e) {
        setStatus(REQUEST_STATUS.ERROR);
        setError(e);
      }
    };
    fetchData();
  }, []);

  const success = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADING;
  const isError = status === REQUEST_STATUS.ERROR;

  const mapSpeakers = speakers
    .filter((record) => {
      const targetString = `${record.lastName} ${record.firstName}`.toLowerCase();
      return searchQuery.length === 0
        ? true
        : targetString.includes(searchQuery.toLowerCase());
    })
    .map((single) => {
      return (
        <SingleSpeaker
          key={single.id}
          {...single}
          toggleButton={() => toggleButtonHandler(single)}
        />
      );
    });

  const toggleFavoriteStatus = (speakerRecord) => {
    return {
      ...speakerRecord,
      isFavorite: !speakerRecord.isFavorite,
    };
  };

  const toggleButtonHandler = async (speakerRecord) => {
    const toggledSpeakerRecord = toggleFavoriteStatus(speakerRecord);
    const speakerIndex = speakers
      .map((single) => single.id)
      .indexOf(speakerRecord.id);

    await axios.put(
      `http://localhost:4000/speakers/${speakerRecord.id}`,
      toggledSpeakerRecord
    );

    setSpeakers([
      ...speakers.slice(0, speakerIndex),
      toggledSpeakerRecord,
      ...speakers.slice(speakerIndex + 1),
    ]);
  };

  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isLoading && <div>Loading...</div>}
      {/* error handling */}
      {isError && (
        <div>
          Loading error... Is the json-server up and running? (try "npm run
          json-server" at your terminal <br />
          <b>ERROR: {error.message}</b>
        </div>
      )}
      {success && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
          {mapSpeakers}
        </div>
      )}
    </>
  );
};
export default Speakers;
