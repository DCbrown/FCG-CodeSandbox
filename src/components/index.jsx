import React from "react";
import ReactDOM from "react-dom";
import Generate from "./Generate";
import List from "./List";

class App extends React.Component {
  state = {
    client: []
  };

  render() {
    return (
      <div>
        <Generate />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
