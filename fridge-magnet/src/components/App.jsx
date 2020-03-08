import React from 'react';
import words from '../api/words';
import StartBtn from './StartBtn';
import WordList from './WordList';
import { DragDropContext} from 'react-beautiful-dnd';
import initialData from './InitialData'

class App extends React.Component{
    state = { words: [], initialData, column: []};

    
    onSearchSubmit = async term =>{
     const response = await words.get('/words', {
       params: {
           topics: `${term},verb`,
           max: 150,
        },
    });
    this.setState({
        words: response.data.map(w => w.word),
        column: initialData.columnOrder.map((columnId =>initialData.columns[columnId]))
    });

    }
    onDragEnd = result =>{

    }

    

    render(){

        return (

    <DragDropContext
      onDragEnd = {this.onDragEnd}
    >
    <div className="" style={{marginTop:'10px'}}>
        <StartBtn onSubmit={this.onSearchSubmit} />
        <WordList
         words={this.state.words} key={this.state.column.id} column={this.state.column} />

    </div>
    </DragDropContext>
     );
     
}
}

export default App;