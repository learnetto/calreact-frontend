import React from 'react';
import Appointment from '../components/Appointment';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import AppointmentForm from '../components/AppointmentForm';

it('renders without crashing', () => {
  shallow(<AppointmentForm />);
});
