import React from "react";
import List from "./List";
import GeneratedClient from "./GeneratedClient";

class Generate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientIsPresented: false,
      generateFirstName: "",
      generateLastName: "",
      generateRequest: "",
      clients: [],
      acceptedClients: [],
      inProgressClients: [],
      completedClients: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
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
        paragraphThree: "Need soon",
        notes: ""
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Dow",
        request: "Need portfolio Website",
        paragraphOne: "Need a Website",
        paragraphTwo: "Will Pay",
        paragraphThree: "Need soon",
        notes: ""
      },
      {
        id: 3,
        firstName: "Jake",
        lastName: "Ed",
        request: "Need picture Website",
        paragraphOne: "Need a Website",
        paragraphTwo: "Will Pay",
        paragraphThree: "Need soon",
        notes: ""
      }
    ];
    this.setState({
      clients: clients
    });
  };

  handleClick = () => {
    const { clients } = this.state;
    const gen = Math.floor(Math.random() * clients.length);
    const genFirstName = clients[gen].firstName;
    const genLastName = clients[gen].lastName;
    const genRequest = clients[gen].request;
    console.log(genFirstName);
    this.setState({
      generateFirstName: genFirstName,
      generateLastName: genLastName,
      generateRequest: genRequest,
      clientIsPresented: true
    });
    console.log(this.state.generateFirstName);
  };

  handleDecline = () => {
    this.setState({
      generateFirstName: "",
      generateLastName: "",
      generateRequest: "",
      clientIsPresented: false
    });
  };

  handleAccept = () => {
    this.handleDecline();
    let joinedFirstName = this.state.acceptedClients.concat(
      this.state.generateFirstName
    );
    let joinedLastName = this.state.acceptedClients.concat(
      this.state.generateLastName
    );
    let joinedRequest = this.state.acceptedClients.concat(
      this.state.generateRequest
    );
    this.setState({
      acceptedClients: [
        {
          firstName: joinedFirstName,
          lastName: joinedLastName,
          request: joinedRequest
        }
      ]
    });
    console.log(this.state.acceptedClients);
  };

  render() {
    /*
    const { clients } = this.state;
    console.log(clients);
    console.log('clients length: ' + clients.length);
    */
    let acceptButton;
    let declineButton;
    if (this.state.clientIsPresented) {
      acceptButton = <button onClick={this.handleAccept}>Accept</button>;
      declineButton = <button onClick={this.handleDecline}>Decline</button>;
    }

    return (
      <div>
        <h1>Generate</h1>
        <button onClick={this.handleClick}>Generate Client</button>
        <GeneratedClient
          generateFirstName={this.state.generateFirstName}
          generateLastName={this.state.generateLastName}
        />
        {acceptButton}
        {declineButton}
        <List
          generatefirstName={this.state.generateFirstName}
          generatelastName={this.state.generateLastName}
          generateRequest={this.state.generateRequest}
        />
      </div>
    );
  }
}

export default Generate;
