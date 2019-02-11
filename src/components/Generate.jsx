import React from "react";
import List from "./List";
import GeneratedClient from "./GeneratedClient";

class Generate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generateName: "",
      clients: [],
      AcceptedClients: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const clients = [
      {
        id: 1,
        firstName: "Jon",
        lastName: "Doe",
        request: "Need a Website",
        paragraphOne: "Need a Website",
        paragraphTwo: "Will Pay",
        paragraphThree: "Need soon"
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        request: "Need portfolio Website",
        paragraphOne: "Need a Website",
        paragraphTwo: "Will Pay",
        paragraphThree: "Need soon"
      },
      {
        id: 3,
        firstName: "Jake",
        lastName: "Doe",
        request: "Need picture Website",
        paragraphOne: "Need a Website",
        paragraphTwo: "Will Pay",
        paragraphThree: "Need soon"
      }
    ];
    this.setState({
      clients: clients
    });
  };

  handleClick = () => {
    const { clients } = this.state;
    const gen = Math.floor(Math.random() * clients.length);
    const genName = clients[gen].firstName;
    console.log(genName);
    this.setState({
      generateName: genName
    });
    console.log(this.state.generateName);
  };

  render() {
    /*
    const { clients } = this.state;
    console.log(clients);
    console.log('clients length: ' + clients.length);
    */
    return (
      <div>
        <h1>Generate</h1>
        <button onClick={this.handleClick}>Generate Client</button>
        <GeneratedClient clinets={this.clients} />
        <List />
      </div>
    );
  }
}

export default Generate;
