import React from 'react'
import './App.css'
import { Draggable } from 'react-beautiful-dnd';

const WordItem = (word) =>{
return(
    <Draggable draggableId={this} index={word.index}>
    {provided => (
    <div
     className="wordItem col col-lg-0.5" 
     {...provided.draggableProps}
     {...provided.dragHandleProps}
     innerRef={provided.innerRef}
     >
    <span className=" wordSpan">
    {word}
    </span>
    </div>
    )}
    </Draggable>
);
};

export default WordItem;
