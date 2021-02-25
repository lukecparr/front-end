import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Spinner, Toast, ToastBody, ToastHeader, Alert } from 'reactstrap';
import { useForm } from '../hooks';

import './UserLogin.css';

const UserLogin = () => {
	const initialValues = { username: '', password: '' };
	const [isLoading, setIsLoading] = useState(false);
	
	const [values, handleChanges, handleSubmit] = useForm(
		initialValues,
		() => {
			setIsLoading(true);
			setTimeout(() => {
				setIsLoading(false);
				console.log(values);
			}, 1000)
		});


	return (
    <div>
      <Toast>
        <ToastHeader>Login</ToastHeader>
        <ToastBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="username" className="formLabel">Username</Label>
              <Input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChanges}
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" className="formLabel">Password</Label>
              <Input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChanges}
              />
            </FormGroup>
            {isLoading === true ? <Spinner color="primary" /> : <Button color="primary" className="loginSubmit">Submit</Button>}
          </Form>
        </ToastBody>
      </Toast>
			<Alert color='secondary'>New to AnywhereFitness? <br/> <strong>Create an account.</strong></Alert>
    </div>
  );
};

export default UserLogin;