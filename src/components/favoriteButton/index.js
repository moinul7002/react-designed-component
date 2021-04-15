import React from "react";

const FavButton = ({ isFavorite, toggleButton }) => {
  return (
    <div
      className={isFavorite ? "heartredbutton" : "heartdarkbutton"}
      onClick={toggleButton}
    ></div>
  );
};

export default FavButton;
