import React from "react";
// USE LOCAL STORAGE!!!
// TRY LOCAL ENV + CHECK CONSOLE.LOGS OBJECTS SEE IF THEY MATCH

class Generate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientIsPresented: false,
      generateId: null,
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
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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

  handleClick = e => {
    e.preventDefault();
    const { clients } = this.state;
    const gen = Math.floor(Math.random() * clients.length);
    const genId = clients[gen].id;
    const genFirstName = clients[gen].firstName;
    const genLastName = clients[gen].lastName;
    const genRequest = clients[gen].request;
    console.log(genFirstName);
    this.setState({
      generateId: genId,
      generateFirstName: genFirstName,
      generateLastName: genLastName,
      generateRequest: genRequest,
      clientIsPresented: true
    });
    console.log(this.state.generateFirstName);
    console.log("HEY!" + this.state.acceptedClients.firstName);
  };

  handleDecline = e => {
    this.setState({
      generateId: "",
      generateFirstName: "",
      generateLastName: "",
      generateRequest: "",
      clientIsPresented: false
    });
  };

  handleAccept = e => {
    e.preventDefault();
    this.handleDecline();

    const obj = {
      id: this.state.generateId,
      firstName: this.state.generateFirstName,
      lastName: this.state.generateLastName,
      request: this.state.generateRequest
    };
    this.state.acceptedClients.push(obj);

    console.log("object " + obj.firstName);
    console.log("accpted " + this.state.acceptedClients.firstName);
  };

  handleDelete = e => {
    const array = this.state.acceptedClients;
    const index = array.indexOf(e.target.value);
    array.splice(index, 1);
    this.setState({ acceptedClients: array });
  };

  handleEdit = () => {
    console.log("edit");
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
        <p>
          {this.state.generateFirstName} {this.state.generateLastName}
        </p>
        <h1>List</h1>
        <ul>
          {this.state.acceptedClients.map((item, key) => (
            <li key={item.id}>
              {item.id} {item.firstName}
              <button onClick={this.handleEdit}>Edit</button>
              <button onClick={this.handleDelete}>Delete</button>
            </li>
          ))}
        </ul>
        {acceptButton}
        {declineButton}
      </div>
    );
  }
}

export default Generate;
