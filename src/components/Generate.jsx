import React from "react";
// USE LOCAL STORAGE
// TRY LOCAL ENV + CHECK CONSOLE.LOGS OBJECTS SEE IF THEY MATCH
// REF: https://www.bigbinary.com/videos/learn-reactjs-in-steps/edit-todo-part-2

// Loop through listing by status

class Generate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientIsPresented: false,
      generateId: 0,
      generateClientIndex: 0,
      generateFirstName: "",
      generateLastName: "",
      generateRequest: "",
      generateParagraphOne: "",
      generateParagraphTwo: "",
      generateParagraphThree: "",
      clients: [],
      acceptedClients: [],
      inProgressClients: [],
      completedClients: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDecline = this.handleDecline.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
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
        paragraphOne: "Need a Website Now",
        paragraphTwo: "Will Pay",
        paragraphThree: "Need soon",
        notes: "",
        status: "",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Dow",
        request: "Need portfolio Website",
        paragraphOne: "Need a Website Later",
        paragraphTwo: "Will Pay",
        paragraphThree: "Need soon",
        notes: "",
        status: "",
      },
      {
        id: 3,
        firstName: "Jake",
        lastName: "Ed",
        request: "Need picture Website",
        paragraphOne: "Need a Website Tomorrow",
        paragraphTwo: "Will Pay",
        paragraphThree: "Need soon",
        notes: "",
        status: "",
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
    const genParagraphOne = clients[gen].paragraphOne;
    const genParagraphTwo = clients[gen].paragraphTwo;
    const genParagraphThree = clients[gen].paragraphThree;
    this.setState({
      generateId: genId,
      generateFirstName: genFirstName,
      generateLastName: genLastName,
      generateRequest: genRequest,
      generateParagraphOne: genParagraphOne,
      generateParagraphTwo: genParagraphTwo,
      generateParagraphThree: genParagraphThree,      
      clientIsPresented: true
    });
  };

  handleDecline = e => {
    this.setState({
      generateFirstName: "",
      generateLastName: "",
      generateRequest: "",
      genParagraphOne: "",
      genParagraphTwo: '',
      genParagraphThree: "",
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
      request: this.state.generateRequest,
      paragraphOne: this.state.generateParagraphOne,
      paragraphTwo: this.state.generateParagraphTwo,
      paragraphThree: this.state.generateParagraphThree,
      status: "accpeted"
    };
    this.state.acceptedClients.push(obj);
    console.log(this.state.acceptedClients);

    //console.log("object " + obj.id);
    //console.log("id is " + this.state.acceptedClients.firstName);
    
  };

  handleDelete = key => {
    let r = window.confirm("Are you sure you want to delete this user");
    if (r === true) {
      console.log(key);
      const clients = [...this.state.acceptedClients];
      clients.splice(key, 1);
      clients.clientIndex = -1;
      this.setState({ acceptedClients: clients });
    } else {
    }
  };

  handleInPogress = key => {
    let r = window.confirm("Are you sure you want to move this user to accepted");
    if (r === true) {

      console.log(key);
      const clients = [...this.state.acceptedClients];
      
      //const kay = clients.filter(x => x.id === key);
      clients[key].status = "inProgress";
      this.setState({ acceptedClients: clients });
      //const results = this.setState({ inProgressClients: kay });

      /*
      clients.splice(key, 1);
      clients.clientIndex = -1;
      this.setState({ acceptedClients: clients });
      */
      //clients.splice(key, 1);
      //clients.clientIndex = -1;
     // this.setState({ acceptedClients: clients });
      //console.log(this.state.acceptedClients);
      clients.forEach((client) => {
        if(client.status === "inProgress") {
          this.state.inProgressClients.push(client);
          console.log(this.state.acceptedClients);
          clients.splice(key, 1);
          clients.clientIndex = -1;
          this.setState({ acceptedClients: clients })
        } else {
          console.log('no logs');
        }
      });

      /*
      console.log(this.state.inProgressClients);
      console.log(key);

      console.log();
      
      const clients = [...this.state.acceptedClients](key, 1);
 
      this.state.inProgressClients.push(clients);
      clients.splice(key, 1);
      
      
      console.log(this.state.inProgressClients);
      */
      //this.state.acceptedClients = this.acceptedClients.concat(this.inProgressClients.splice(key, 1));

      
      //const clients = [...this.state.acceptedClients];
      /*
      const clients = [...prevState.complete.list]
      this.setState({ inProgressClients: clients });
      clients.splice(key, 1);
      clients.clientIndex = -1;
      this.setState({ acceptedClients: clients });
      
      console.log(this.state.inProgressClients);
      */
    } else {
    }
  };
  
  render() {
    let showClient;

    if (this.state.clientIsPresented) {
      showClient = (
        <div className="card text-center">
          <h5 className="card-header">Client Request</h5>
          <div className="card-body">
            <h5 className="card-title">
             {this.state.generateId} {this.state.generateFirstName} {this.state.generateLastName}
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
              Generate A Client <i className="fa fa-users" aria-hidden="true" />
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
          <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="accepted-tab" data-toggle="tab" href="#accepted" role="tab" aria-controls="accepted" aria-selected="true">Accepted</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="inProgress-tab" data-toggle="tab" href="#inProgress" role="tab" aria-controls="inProgress" aria-selected="false">In Progress</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="finished-tab" data-toggle="tab" href="#finished" role="tab" aria-controls="finished" aria-selected="false">Finished</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="accepted" role="tabpanel" aria-labelledby="accepted-tab">
              <div className="col-12">
                
                <ul className="list-group col-12">
                  {this.state.acceptedClients.map((item, key) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center col-12"
                      key={item.id}
                    >
                      <div id="accordion" className="col-12">
                        <div className="card">
                          <div className="card-header text-center" id={'heading' + item.id}>
                            <h5 className="mb-0">
                              <button className="btn btn-link" data-toggle="collapse" data-target={'#collapse' + item.id} aria-expanded="false" aria-controls={'collapse' + item.id}>
                              {item.firstName} {item.lastName} {item.request} 
                              </button>
                            </h5>
                          </div>
                          <div id={'collapse' + item.id} className="collapse" aria-labelledby={"heading" + item.id} data-parent="#accordion">
                            <div className="card-body">
                            <p>{item.paragraphOne}</p>
                            <p>{item.paragraphTwo}</p>
                            <p>{item.paragraphThree}</p>
                          <button
                          className="btn btn-outline-danger"
                          onClick={this.handleDelete.bind(this, key)}
                          >
                          Delete
                          </button>
                          <button
                          className="btn btn-outline-info"
                          onClick={this.handleInPogress.bind(this, key)}
                          >
                          Move to in Progress
                          </button>
                            </div>
                          </div>
                        </div>
                      </div>  
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="tab-pane fade" id="inProgress" role="tabpanel" aria-labelledby="inProgress-tab">In Progress</div>
            <div className="tab-pane fade" id="finished" role="tabpanel" aria-labelledby="finished-tab">Finished</div>
          </div>          
        </div>
      </div>
    );
  }
}

export default Generate;
