import React, { useState } from "react";
import { useParams, useRouteMatch, Route, NavLink, useHistory } from "react-router-dom";
import ClassList from "./ClassList";

// this component will be display each individual class once clicked on from the home page 
// this will have all the details on each class and will also include the "Sign Up" button for users
// this will NOT have any additional functionality for instructors
function EachClass(props) {

    // useParams for rendering specific classes on the basis of their ID
    const params = useParams();

    // useHistory here to allow you to go back and forth between class selection and form submission
    const history = useHistory();

    // attached onclick event back to selection button
    const routeToHome = event => {
        history.push("/class-list")
    }

    //attached onclick event to sign-up form 
    const routeToSignUp = event => {
        history.push("/sign-up")
    }

    // iterating over arr of objects to find classes with matching ids as the one in the URL (params.itemID)
    // classSelected will be the variable that grabs each specific selected item. This will used in the JSX to display each class seperately 
    const classSelected = props.classesD.find(eachClass => eachClass.id === Number(params.classID))
    return (
        <div className="class-wrapper">
            <button className="go-back-button" onClick={routeToHome}>Back to Class Selection..</button>
            <button className="sign-up-button" onClick={routeToSignUp}>Sign Up!</button>
            <div className="image-wrapper">
                <img 
                src={classSelected.url}
                alt={classSelected.name}
                />
            </div>
            <div className="class-title-wrapper">
                <h2>{classSelected.name}</h2>
                <h2>{classSelected.type}</h2>
                <h2>{classSelected.intensity}</h2>
                <h2>{classSelected.max_size}</h2>
                <h2>{classSelected.date}</h2>
            </div>
            <div className="class-description">
                <p>{classSelected.description}</p>
            </div>

        </div>
    )
}

export default EachClass;
