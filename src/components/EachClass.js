import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button } from "reactstrap";

import { classContext, userContext } from '../contexts';

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
        history.push("/")
    }
    //attached onclick event to sign-up form 
    const routeToSignUp = event => {
        history.push("/sign-up")
    }
    // iterating over arr of objects to find classes with matching ids as the one in the URL (params.itemID)
    // classSelected will be the variable that grabs each specific selected item. This will used in the JSX to display each class seperately 
    const [classesD] = useContext(classContext);
    const [userRole] = useContext(userContext);
    
    const classSelected = classesD.find(eachClass => eachClass.id === Number(params.classID))

    return (
        <div className="class-wrapper">
            <Button color="primary" size="lg" className="go-back-button" onClick={routeToHome}>Back to Class Selection..</Button>
            <div className="image-wrapper">
                <img 
                src={classSelected.url}
                alt={classSelected.name}
                />
            </div>
            {userRole === 'instructor' ? <Button color='primary' size="lg" onClick={() => history.push(`/edit-class/${classSelected.id}`)}>Edit Class</Button> : <Button color="secondary" size="lg" className="sign-up-button" onClick={routeToSignUp}>Sign Up!</Button>}
            <div className="class-title-wrapper">
                <h2> Class Name: {classSelected.name}</h2>
                <h3> Class Type: {classSelected.type}</h3>
                <h3> Intensity: {classSelected.intensity}</h3>
                <h3> Date Available: {classSelected.date}</h3>
            </div>
            <div className="class-description">
            <p>{classSelected.description}</p>
            </div>
        </div>
    )
}

export default EachClass;
