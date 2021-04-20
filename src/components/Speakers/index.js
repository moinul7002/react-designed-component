import React, { useState, useContext } from "react";
import SearchBar from "../SearchBar";
import SingleSpeaker from "./singleSpeaker";
import { REQUEST_STATUS } from "../../reducers";

//contexts
import { DataProvider, DataContext } from "../../contexts/DataContext";

const SpeakersComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { records: speakers, status, error, put } = useContext(DataContext);

  const success = status === REQUEST_STATUS.SUCCESS;
  const isLoading = status === REQUEST_STATUS.LOADING;
  const isError = status === REQUEST_STATUS.ERROR;
  const specialMessage = "";

  const toggleButtonHandler = async (speakerRecord) => {
    put({
      ...speakerRecord,
      isFavorite: !speakerRecord.isFavorite,
    });
  };

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

  return (
    <div>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {specialMessage && specialMessage.length > 0 && (
        <div
          className="bg-orange-100 border-l-8 border-orange-500 text-orange-700 p-4 text-2xl"
          role="alert"
        >
          <p className="font-bold">Special Message</p>
          <p>{specialMessage}</p>
        </div>
      )}

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
    </div>
  );
};

const Speakers = (props) => {
  return (
    <DataProvider baseUrl="http://localhost:4000" routeName="speakers">
      <SpeakersComponent {...props}></SpeakersComponent>
    </DataProvider>
  );
};
export default Speakers;
