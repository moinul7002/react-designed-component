import React, { useState, useEffect } from "react";
import SearchBar from "../SearchBar";
// import speakersData from "./data.js";
import SingleSpeaker from "./singleSpeaker";
import axios from "axios";

const Speakers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4000/speakers");
      setSpeakers(response.data);
    };
    fetchData();
  }, []);

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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12">
        {mapSpeakers}
      </div>
    </>
  );
};
export default Speakers;
