import React from 'react';
import ReactDOM from 'react-dom';
import Appointment from '../components/Appointment';
import { BrowserRouter as Router } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Appointment /></Router>, div);
});
