import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      appointments: []
    }
  }

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: 'http://localhost:3001/appointments'
    }).done(data => {
      this.setState({appointments: data});
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          {this.state.appointments.map(appointment => {
            return(<p key={appointment.id}>{appointment.title}</p>);
          })
          }
        </div>
      </div>
    );
  }
}

export default App;
