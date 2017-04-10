import React from 'react';
import ReactDOM from 'react-dom';
import Appointment from '../components/Appointment';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Appointment />);
});

describe('render', () => {
	it('should display the appointment title', () => {
    const appointment = mount(<Router><Appointment appointment={{id:1, title: 'Team standup meeting', appt_time: new Date()}} /></Router>);
    const title = <h3>Team standup meeting</h3>;
		expect(appointment.contains(title)).toEqual(true);
	})
});
