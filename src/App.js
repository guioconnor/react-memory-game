import React, { Component } from "react";
import MemoryGame from "./module";

class App extends Component {
  render() {
    return <MemoryGame cards={["A", "B", "C", "D", "E", "F", "G", "H"]} />;
  }
}

export default App;
