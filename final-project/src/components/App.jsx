import React from "react";
import words from "../api/words";
import StartBtn from "./StartBtn";
import WordList from "./WordList";
import CreatePhrase from "./CreatePhrase";
import InitialData from "./InitialData";
import { DragDropContext } from "react-beautiful-dnd";
// import Result from './Result';

class App extends React.Component {
  state = {
    words: [],
    selectedWord: ["Double click or Drag & Drop words HERE!"],
    column: [],
    InitialData
  };

  onSearchSubmit = async term => {
    const response = await words.get("/words", {
      params: {
        topics: `${term},verb`,
        max: 150
      }
    });
    this.setState({
      words: response.data.map(w => w.word)
    });
  };

  onWordSelect = word => {
    this.setState({
      selectedWord: word
    });
  };

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    console.log(source.droppableId);
    const column = this.state.columns[this.state.column.id];
    const newWordIds = Array.from(words.word);
    newWordIds.splice(source.index, 1);
    newWordIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      words: newWordIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn
      }
    };
    this.setState(newState);
  };

  render() {
    console.log(this.state.columnId);
    return (
      <div className="" style={{ marginTop: "10px" }}>
        <StartBtn onSubmit={this.onSearchSubmit} />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <WordList
            onWordSelect={this.onWordSelect}
            words={this.state.words}
            key={this.state.column.id}
            column={this.state.column}
          />
        </DragDropContext>
        <CreatePhrase word={this.state.selectedWord} />
      </div>
    );
  }
}

export default App;
