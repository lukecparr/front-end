import { useState } from 'react';

export const useForm = (initialValues, callback) => {
	const [values, setValues] = useState(initialValues);

	const handleChanges = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		callback();
	}
	
	return [values, handleChanges, handleSubmit];
};
