import React, { PropTypes } from 'react';
import Appointment from './Appointment'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export const AppointmentsList = ({appointments}) => 
  <div>
  	<CSSTransitionGroup
  		transitionName="appointment"
  		transitionEnterTimeOut={500} >
	    {appointments.map(function(appointment) {
	      return (
	        <Appointment appointment={appointment} key={appointment.id} />
	      )
	    })}
	   </CSSTransitionGroup>
  </div>

AppointmentsList.propTypes = {
  appointments: PropTypes.array.isRequired
}

AppointmentsList.defaultProps = {
  appointments: []
}