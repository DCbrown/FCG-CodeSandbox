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
    console.log(genRequest);
    this.setState({
      generateId: genId,
      generateFirstName: genFirstName,
      generateLastName: genLastName,
      generateRequest: genRequest,
      clientIsPresented: true
    });
    console.log(this.state.generateRequest);
    console.log("HEY!" + this.state.acceptedClients.generateRequest);
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
    console.log("oject " + obj.lastName);
    console.log("object " + obj.request);
    console.log(this.state.acceptedClients);
  };

  handleDelete = key => {
    console.log(key);
    const clients = [...this.state.acceptedClients];
    clients.splice(key, 1);
    this.setState({ acceptedClients: clients });
  };

  handleEdit = () => {
    console.log("edit");
  };

  render() {
    let showClient;

    if (this.state.clientIsPresented) {
      showClient = (
        <div className="card text-center">
          <h5 className="card-header">Client Request</h5>
          <div className="card-body">
            <h5 className="card-title">
              {this.state.generateFirstName} {this.state.generateLastName}
            </h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <p className="card-text">{this.state.generateRequest}</p>
            <button className="btn btn-success" onClick={this.handleAccept}>
              Accept
            </button>
            <button className="btn btn-danger" onClick={this.handleDecline}>
              Decline
            </button>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2019</time>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="container">
            <h1 className="display-4">Fluid jumbotron</h1>
            <button
              type="button"
              className="btn btn-info"
              onClick={this.handleClick}
            >
              Generate A Client <i class="fa fa-users" aria-hidden="true" />
            </button>
            <p className="lead">
              This is a modified jumbotron that occupies the entire horizontal
              space of its parent.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">{showClient}</div>
          </div>
        </div>
        <div className="column is-full">
          <h1 className="has-text-centered">List</h1>
          <div className="has-text-centered">
            <span className="button is-success">Accepted</span>
            <span className="button is-info">In Progress</span>
            <span className="button is-danger">Finished</span>
          </div>
          <div className="col-8 offset-md-2">
            <ul className="list-group">
              {this.state.acceptedClients.map((item, key) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={item.id}
                >
                  {item.firstName} {item.lastName} | {item.request} | Progress:
                  0%
                  <span>
                    <button
                      className="btn btn-outline-info"
                      onClick={this.handleEdit}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={this.handleDelete.bind(this, key)}
                    >
                      Delete
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Generate;
