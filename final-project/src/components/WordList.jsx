import React from "react";
import WordItem from "./WordItem";
import "./App.css";
import { Droppable } from "react-beautiful-dnd";

const WordList = ({ words, onWordSelect, column }) => {
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

  return (
    <Droppable droppableId={column.id}>
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
