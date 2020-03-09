import React from 'react';
import words from '../api/words';
import StartBtn from './StartBtn';
import WordList from './WordList';
import CreatePhrase from './CreatePhrase';
import InitialData from './InitialData';
import { DragDropContext } from 'react-beautiful-dnd';
// import Result from './Result';


class App extends React.Component{
    state = { words: [], selectedWord:["Double click or Drag & Drop words HERE!"], column:[] };

    
    onSearchSubmit = async term =>{
     const response = await words.get('/words', {
       params: {
           topics: `${term},verb`,
           max: 150,
        },
    });
    this.setState({
        words: response.data.map(w => w.word),
        // words: response.data
        column: InitialData.columnOrder.map(columnId => InitialData.columns[columnId]),

    });

    }

    onWordSelect = word =>{
        this.setState({selectedWord: word});
    }
    
    onDragEnd = result =>{

        const{ destination, source, draggableId} = result;

        if(!destination){
            return;
        }
        if(
            destination.droppableId === SourceBufferList.droppableId &&
            destination.index === source.index
        ){
            return;
        }

        const column =this.state.column[source.droppableId];
        const newWordIds = Array.from(column.wordIds);
        newWordIds.splice(source.index , 1);
        newWordIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...column,
             wordIds: newWordIds,
        };

        const newState ={
            ...this.state,
            columns:{
                ...this.state.columns,
                [newColumn.id]: newColumn,
            },
        };
        this.setState(newState);
    };
    

    render(){
     return (
    <div className="" style={{marginTop:'10px'}}>
        <StartBtn onSubmit={this.onSearchSubmit} />
        <DragDropContext onDragEnd={this.onDragEnd}>
        <WordList
         onWordSelect={this.onWordSelect} 
         words={this.state.words} 
         key={this.state.column.id}
         column={this.state.column} />
         </DragDropContext>
         <CreatePhrase word={this.state.selectedWord}/>

    </div>
    );
}
}

export default App;