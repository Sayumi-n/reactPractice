import React from "react";
// import WordItem from "./WordItem";

const UserInfo = props => {
  const renderedList = props.words.map((w, index) => (
    <li key={index}>{w.word}</li>
  ));
  return (
    <div className="user-info">
      <ul>{renderedList}</ul>
    </div>
  );
};

export default UserInfo;
