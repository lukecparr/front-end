import React, { useState, useContext } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { Button } from "reactstrap";
import "./EditClassForm.css";

import { classContext } from '../contexts';

function EditClassForm() {
    const history = useHistory();
    const [classes, , , , instructorEditClass] = useContext(classContext);
    const params = useParams();

    //TODO - Mocking params here because I can't get them to work
    const fakeParams = { classID: 1 };

    const classSelected = classes.find(eachClass => eachClass.id === Number(fakeParams.classID))
    
    const [editedClass, setEditedClass] = useState(classSelected)

    const handleChanges = (event) => {
        const newStateObj = {...editedClass, [event.target.name]: event.target.value};
        setEditedClass(newStateObj);
    }
    
    //TODO - This needs to be reworked to update the existing object
    const submitEdit = (event) => {
       event.preventDefault();
       instructorEditClass(editedClass);
       setEditedClass({
        id: "",
        name: '',
        instructor_name: '',
        type: '',
        intensity: '',
        location: '',
        max_size: '',
        duration: '',
        date: '',
        description: "",
        url: "" 
       });
       history.push(`/class-list/${params.classID}`)
    }
    
    return (
        <form onSubmit={submitEdit} className="editClassForm">
            <label htmlFor="title">
                Class Name:
                <input
                id="title"
                type="text"
                placeholder="enter class name"
                name="name"
                value={editedClass.name}
                onChange={handleChanges}
                />
            </label>
            <label htmlFor="inst">
                Instructor Name:
                <input
                id="inst"
                type="text"
                placeholder="enter your name"
                name="instructor_name"
                value={editedClass.instructor_name}
                onChange={handleChanges}
                />
            </label>
            <label htmlFor="intensity">
                Intensity:
                <input
                id="intensity"
                type="text"
                placeholder="enter intensity"
                name="intensity"
                value={editedClass.intensity}
                onChange={handleChanges}
                />
            </label>
            <label htmlFor="country">
                Location:
                <input
                id="country"
                type="text"
                placeholder="enter class location"
                name="location"
                value={editedClass.location}
                onChange={handleChanges}
                />
            </label>
            <label htmlFor="start">
                Date:
                <input
                id="start"
                type="date"
                name="date"
                value={editedClass.date}
                onChange={handleChanges}
                />
            </label>
            <label htmlFor="class-exp">
                Class Description:
                <input
                id="class-exp"
                type="textarea"
                placeholder="enter class description"
                name="description"
                value={editedClass.description}
                onChange={handleChanges}
                />
            </label>
            <label htmlFor="image">
                Class Image URL:
                <input
                id="image"
                type="url"
                placeholder="enter image link"
                name="url"
                value={editedClass.url}
                pattern="https://.*"
                onChange={handleChanges}
                />
            </label>
            <Button className="newClassButton" color="primary" size="lg">Add New Class</Button>
        </form>
    )
}

export default EditClassForm;

// linking this component to the instructor login 
