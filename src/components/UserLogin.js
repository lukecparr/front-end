import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const UserLogin = () => {
	const credentials = {
		username: '',
		password: ''
	}
	
	const [formValues, setFormValues] = useState();


	return (
		<>
			<h1>Here's the login component</h1>
			<Form /*onSubmit={handleSubmit}*/ >
				<FormGroup>
					<Label for='username'>Username</Label>
					<Input type='text' name='username' /*value={formValues.username}*/ /*onChange={handleChanges}*/ />
				</FormGroup>
				<FormGroup>
					<Label for='password'>Password</Label>
					<Input type='password' name='password' /*value={formValues.password}*/ /*onChange={handleChanges}*/ />
				</FormGroup>
				<Button>Submit</Button>
			</Form>
		</>
	)
};

export default UserLogin;