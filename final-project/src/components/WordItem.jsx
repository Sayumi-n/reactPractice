import React from 'react'
import './App.css'
import { Draggable } from 'react-beautiful-dnd';

const WordItem = ({word, onWordSelect, column}) =>{
return(
    <Draggable draggableId={word} index={word.index}>
    {(provided) =>  (
    <div className="wordItem col col-lg-0.5" 
    onDoubleClick={()=>onWordSelect(word)}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    ref={provided.innerRef}
    >
    <span className="wordSpan">
    {word}
    </span>

    </div>
    )}
    </Draggable>
);
};

export default WordItem;
