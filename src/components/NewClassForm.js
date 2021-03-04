import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import "./NewClassForm.css";

function NewClassForm(props) {
    const [instructorNewClass, setInstructorNewClass] = useState({
        id: "",
        name: '',
        instructor_name: '',
        type: '',
        intensity: '',
        location: '',
        date: '',
        description: "",
        url: ""
    })

    const handleChanges = (event) => {
        const newStateObj = {...instructorNewClass, [event.target.name]: event.target.value};
        setInstructorNewClass(newStateObj);
    }

    const submitAddition = (event) => {
       event.preventDefault();
       props.addNewClass(instructorNewClass);
       setInstructorNewClass({
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
       })
    }
    return (
        <form onSubmit={submitAddition}>
            <label htmlFor="title">
                Class Name:
                <input
                id="title"
                type="text"
                placeholder="enter class name"
                name="name"
                value={instructorNewClass.name}
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
                value={instructorNewClass.instructor_name}
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
                value={instructorNewClass.intensity}
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
                value={instructorNewClass.location}
                onChange={handleChanges}
                />
            </label>
            <label htmlFor="start">
                Date:
                <input
                id="start"
                type="date"
                name="date"
                value={instructorNewClass.date}
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
                value={instructorNewClass.description}
                onChange={handleChanges}
                />
            </label>
            <label htmlFor="image">
                Class Description:
                <input
                id="image"
                type="url"
                placeholder="enter image link"
                name="url"
                value={instructorNewClass.url}
                pattern="https://.*"
                onChange={handleChanges}
                />
            </label>
            <Button color="primary" size="lg">Add New Class</Button>
        </form>
    )
}

export default NewClassForm;

// linking this component to the instructor login 
