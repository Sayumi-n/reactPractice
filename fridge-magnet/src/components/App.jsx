import React from 'react';
import words from '../api/words';
import StartBtn from './StartBtn';
import WordList from './WordList';
import CreatePhrase from './CreatePhrase';


class App extends React.Component{
    state = { words: [], selectedWord:[] };

    
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

    onWordSelect = word =>{
        this.setState({selectedWord: word});
    }

    

    render(){
     return (
    <div className="" style={{marginTop:'10px'}}>
        <StartBtn onSubmit={this.onSearchSubmit} />
        <WordList
         onWordSelect={this.onWordSelect} 
         words={this.state.words} />

         <CreatePhrase word={this.state.selectedWord}/>

    </div>
    );
}
}

export default App;