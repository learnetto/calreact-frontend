import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

export default class AppHeader extends React.Component {

	handleSignOut = (e) => {
		e.preventDefault();
		$.ajax({
			type: 'DELETE',
			url: 'http://localhost:3001/auth/sign_out',
			data: JSON.parse(sessionStorage.user)
		})
		.done(() => {
			sessionStorage.removeItem('user');
			this.props.history.push('/login');
		})
	}

	render () {
		return (
			<div>
				{sessionStorage.getItem('user') && (
					<p>
						{JSON.parse(sessionStorage.getItem('user')).uid}
						<a href="#" onClick={this.handleSignOut} >Sign out</a>
					</p>
				)}
				<Link to='/'>
					<h1>CalReact</h1>
				</Link>
			</div>
		)
	}
} 
