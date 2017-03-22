import React, { PropTypes } from 'react';
import AppointmentForm from './AppointmentForm';
import { AppointmentsList } from './AppointmentsList';
import update from 'immutability-helper';
import $ from 'jquery';


export default class Appointments extends React.Component {
  static propTypes = {
    appointments: PropTypes.array.isRequired
  }

  static defaultProps = {
    appointments: []
  }

  constructor (props, railsContext) {
    super(props)
    this.state = {
      appointments: this.props.appointments
    }
  }

  componentDidMount () {
    if(this.props.match) {
      $.ajax({
        type: "GET",
        url: 'http://localhost:3001/appointments',
        dataType: "JSON",
        headers: {'access-token': 'nCnrSvyA3Dw2u1LN_u8trA',
        client: '8F959W3E7T8vrQ1KDggICA',
        uid: 'test4@example.com'}
      }).done((data) => {
        this.setState({appointments: data});
      }).fail((response) => {
        if(response.status === 401) {
          console.log('unauth');
        }
      });
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "http://localhost:3001/auth/sign_in",
      data: {
        email: this.email.value,
        password: this.pwd.value
      }
      }).done((data, textStatus, jqXHR) => {
        console.log(jqXHR.getAllResponseHeaders());
      }).fail((data, textStatus, jqXHR) => {
        console.log(jqXHR);
      });
  }


  addNewAppointment = (appointment) => {
    const appointments = update(this.state.appointments,
                                { $push: [appointment]});
    this.setState({
      appointments: appointments.sort(function(a,b){
        return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <input name="email" ref={(email) => this.email = email} />
          <input name="password" type="password"  ref={(pwd) => this.pwd = pwd} />
          <input type="submit"/>
        </form>
        <AppointmentForm handleNewAppointment={this.addNewAppointment} />
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
}
