import React from "react";

const WordItem = ({ word }) => {
  return (
    <div className="wordItem col col-lg-0.5">
      <span className="wordSpan">{word}</span>
    </div>
  );
};

export default WordItem;
