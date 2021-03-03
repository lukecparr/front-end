import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from '../hooks';
import { Button, Form, FormGroup, Label, Input, Spinner, Toast, ToastBody, ToastHeader, Alert } from 'reactstrap';

import './NewUser.css';

import axios from 'axios';

const NewUser = () => {
	const initialValues = { name: '', username: '', email: '', password: '', role: '' }; //Initial form values
	const [isLoading, setIsLoading] = useState(false); //State for progress spinner
  const history = useHistory();
	
  //Custom hook for managing inputs
	const [values, handleChanges, handleSubmit] = useForm(
		initialValues,
		//Function to run on form submit.
    () => {
      //Registers the user with form values then, if successful, logs the user in and redirects to home page.
			setIsLoading(true);
      axios.post('https://anytime-fitness.herokuapp.com/api/auth/register', values)
				.then(res => {
          axios.post('https://anytime-fitness.herokuapp.com/api/auth/login', {username: values.username, password: values.password})
						.then(res => {
              localStorage.setItem('token', res.data.token);
							setIsLoading(false);
							history.push('/');
						})
            .catch((err) => console.log(err.message));
				})
				.catch(err => {
					console.log(err.message);
				});
		});


	return (
    <div className='signUp'>
      <Toast>
        <ToastHeader>Sign up</ToastHeader>
        <ToastBody>
          <Form onSubmit={handleSubmit}>
						
						{/* Name input */}
            <FormGroup>
              <Label for="name" className="formLabel">Name<mark>*</mark></Label>
              <Input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChanges}
              />
            </FormGroup>

						{/* Username input */}
            <FormGroup>
              <Label for="username" className="formLabel">Username<mark>*</mark></Label>
              <Input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChanges}
              />
            </FormGroup>

						{/* Email input */}
            <FormGroup>
              <Label for="email" className="formLabel">Email<mark>*</mark></Label>
              <Input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChanges}
              />
            </FormGroup>

						{/* Password input */}
            <FormGroup>
              <Label for="password" className="formLabel">Password<mark>*</mark></Label>
              <Input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChanges}
              />
            </FormGroup>

						{/* Auth code input */}
            <FormGroup>
              <Label for="role" className="formLabel">Instructor Auth Code</Label>
              <Input
                type="text"
                name="role"
                value={values.role}
                onChange={handleChanges}
              />
            </FormGroup>

						{/* Submit button & progress spinner */}
            {isLoading === true ? <Spinner color="success" /> : <Button color="success" className="loginSubmit">Submit</Button>}
          </Form>
        </ToastBody>
      </Toast>

			{/* Switch to login button */}
			<Alert color='secondary'>Already have an account? <br/> <strong><Link to='/login'>Login</Link></strong></Alert>
    </div>
	);
};

export default NewUser;