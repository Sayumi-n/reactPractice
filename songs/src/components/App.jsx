import React from "react";
import { selectSong } from "../actions";
import SongList from "./SongList";
// need {} for named exports, no {} for default

const App = () => {
  return (
    <div>
      <SongList />
    </div>
  );
};

export default App;
