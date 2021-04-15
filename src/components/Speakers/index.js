import React, { useState, useEffect, useReducer } from "react";
import SearchBar from "../SearchBar";
// import speakersData from "./data.js";
import SingleSpeaker from "./singleSpeaker";
import axios from "axios";
import {
  GET_ALL_SUCCESS,
  GET_ALL_FAILURE,
  PUT_SUCESS,
  PUT_FAILURE,
} from "../../actions";
import RequestReducer, { REQUEST_STATUS } from "../../reducers";

const Speakers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [{ records: speakers, status, error }, dispatch] = useReducer(
    RequestReducer,
    {
      records: [],
      status: REQUEST_STATUS.LOADING,
      error: null,
    }
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/speakers");
        dispatch({
          records: response.data,
          type: GET_ALL_SUCCESS,
        });
      } catch (e) {
        dispatch({
          type: GET_ALL_FAILURE,
          error: e,
        });
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

  const toggleButtonHandler = async (speakerRecord) => {
    try {
      const toggledFavoriteStatus = {
        ...speakerRecord,
        isFavorite: !speakerRecord.isFavorite,
      };

      await axios.put(
        `http://localhost:4000/speakers/${speakerRecord.id}`,
        toggledFavoriteStatus
      );
      dispatch({
        type: PUT_SUCCESS,
        singleRecord: toggledFavoriteStatus,
      });
    } catch (e) {
      dispatch({
        type: PUT_FAILURE,
        error: e,
      });
      setError(e);
    }
  };

  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isLoading && <div>Loading...</div>}
      {/* error handling */}
      {isError && (
        <div>
          Loading error... Is the json-server up and running? (try "npm run
          json-server" at your terminal) <br />
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
