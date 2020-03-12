import React from "react";
import "./App.css";
import { Draggable } from "react-beautiful-dnd";

const WordItem = ({ word, onWordSelect, index }) => {
  return (
    <Draggable draggableId={`${word}${index}`} index={index}>
      {provided => (
        <div
          className="wordItem col col-lg-0.5"
          onDoubleClick={() => onWordSelect(word)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <span className="wordSpan">{word}</span>
        </div>
      )}
    </Draggable>
  );
};

export default WordItem;
