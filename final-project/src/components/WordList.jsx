import React from "react";
import WordItem from "./WordItem";
import "./App.css";
import { Droppable } from "react-beautiful-dnd";

const WordList = ({ words, onWordSelect, columns }) => {
  const renderedList = words.map((word, index) => {
    return (
      <WordItem
        key={word}
        word={word}
        onWordSelect={onWordSelect}
        index={index}
      />
    );
  });
  console.log(columns);
  return (
    <Droppable droppableId={columns} direction="vertical">
      {provided => (
        <div
          className="container"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {renderedList}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default WordList;
