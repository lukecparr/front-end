import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../hooks';
import { Button, Form, FormGroup, Label, Input, Spinner, Toast, ToastBody, ToastHeader, Alert } from 'reactstrap';
import axios from 'axios';

import './UserLogin.css';

const UserLogin = () => {
	const initialValues = { username: '', password: '' };
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const history = useHistory();

	//Custom hook for managing inputs
	const [values, handleChanges, handleSubmit] = useForm(
		initialValues,
		//Function to run on form submit
		() => {
			//Logs user in with form values then redirects to home page
			setError('');
			setIsLoading(true);
			axios.post('https://anytime-fitness.herokuapp.com/api/auth/login', values)
				.then(res => {
					localStorage.setItem('token', res.data.token);
					setIsLoading(false);
					history.push('/')
				})
				.catch(err => {
					if (err.message === 'Request failed with status code 404') {
						setError('User not found');
						setIsLoading(false);
					} else {
						console.log(err.message);
					}
				});
		}
	);

	return (
		<div className='login'>
			<Toast>
				<ToastHeader>Login</ToastHeader>
				<ToastBody>
					<Form onSubmit={handleSubmit}>
						{/* Username input */}
						<FormGroup>
							<Label for='username' className='formLabel'>
								Username
							</Label>
							<Input
								type='text'
								name='username'
								value={values.username}
								onChange={handleChanges}
							/>
						</FormGroup>

						{/* Password input */}
						<FormGroup>
							<Label for='password' className='formLabel'>
								Password
							</Label>
							<Input
								type='password'
								name='password'
								value={values.password}
								onChange={handleChanges}
							/>
						</FormGroup>

            {/* Error message */}
						{error ? <pre>{error}</pre> : ''}

            {/* Submit button and progress spinner */}
						{isLoading === true ? (<Spinner color='primary' />) : (<Button color='primary' className='loginSubmit'>Submit</Button>)}
					</Form>
				</ToastBody>
			</Toast>

			{/* Submit button and progress spinner */}
			<Alert color='secondary'>
				New to AnywhereFitness? <br/>
				<strong>
					<Link to='/sign-up'>Create an account.</Link>
				</strong>
			</Alert>
		</div>
	);
};

export default UserLogin;
