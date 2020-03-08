import React from 'react'
import WordItem from './WordItem';
import './App.css'
import { Droppable } from 'react-beautiful-dnd';

const WordList = props =>{

    const words = props.words.map((word, index) =>{
     return <WordItem key={word} word={word} index={index} />
    });

return (
<Droppable droppableId={this}>
    {provided =>(
    <div className='container' innerRef={provided.innerRef} {...provided.droppableProps}>
        {words}
        {provided.placeholder}
    </div>
    )}
</Droppable>
);
};

export default WordList;