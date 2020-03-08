import React from 'react';
import words from '../api/words';
import StartBtn from './StartBtn';
import WordList from './WordList';
import { DragDropContext} from 'react-beautiful-dnd';

class App extends React.Component{
    state = { words: []};

    
    onSearchSubmit = async term =>{
     const response = await words.get('/words', {
       params: {
           topics: `${term},verb`,
           max: 150,
        },
    });
    this.setState({
        words: response.data.map(w => w.word)
        // words: response.data
    });

    }

    

    render(){
     return (
    <DragDropContext
      onDragEnd = {this.onDragEnd}
    >
    <div className="" style={{marginTop:'10px'}}>
        <StartBtn onSubmit={this.onSearchSubmit} />
        <WordList
         onWordSelect={this.onWordSelect} 
         words={this.state.words} />

    </div>
    </DragDropContext>
    );
}
}

export default App;