import React from 'react'
import WordItem from './WordItem';
import './App.css'

const WordList = props =>{

    const words = props.words.map((word) =>{
     return <WordItem key={word} word={word}/>
    });

return <div className='container'>{words}</div>;
};

export default WordList;