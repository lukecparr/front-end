import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useForm } from '../hooks';

const UserLogin = () => {
	const initialState = { username: '', password: '' };
	
	const [values, handleChanges, handleSubmit] = useForm(initialState, () => {console.log(values)});


	return (
		<>
			<h1>Here's the login component</h1>
			<Form onSubmit={handleSubmit} >
				<FormGroup>
					<Label for='username'>Username</Label>
					<Input type='text' name='username' value={values.username} onChange={handleChanges} />
				</FormGroup>
				<FormGroup>
					<Label for='password'>Password</Label>
					<Input type='password' name='password' value={values.password} onChange={handleChanges} />
				</FormGroup>
				<Button color="success">Submit</Button>
			</Form>
		</>
	)
};

export default UserLogin;