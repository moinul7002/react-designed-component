import React from "react";
import FavButton from "../favoriteButton";
import SpeakerImage from "../speakerImage";

const SingleSpeaker = ({
  id,
  bio,
  firstName,
  lastName,
  isFavorite,
  toggleButton,
}) => {
  return (
    <div className="rounded overflow-hidden shadow-lg p-6 bg-white">
      <div className="grid grid-cols-4 mb-6">
        <div className="font-bold text-lg col-span-3">{`${firstName} ${lastName}`}</div>
        <div className="flex justify-end">
          <FavButton isFavorite={isFavorite} toggleButton={toggleButton} />
        </div>
      </div>
      <div className="mb-6">
        <SpeakerImage id={id} />
      </div>
      <div>{bio.substr(0, 70) + "..."}</div>
    </div>
  );
};

export default SingleSpeaker;
