import React, { useContext } from "react";
import { Link } from "react-router-dom";

import './ClassList.css'; 
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

import { classContext, userContext } from '../contexts/index';


function ClassList() {
	const [classes] = useContext(classContext);
	const [userRole] = useContext(userContext);

    return (
        <>
			    {/* Here's how we can do conditional elements for instructors vs clients */}
			    {userRole === 'instructor' ? <h1>Logged in as {userRole}</h1> : ''}
      
          <div className="class-list">
            {classes.map(eachClass => {
                return (
                    <div className="class-card" key={eachClass.id}>
                <Link to={`/class-list/${eachClass.id}`}> 
                    <Card>
                    <CardImg
                    top width="100%"
                    src={eachClass.url}
                    alt={eachClass.type}
                        />
                    <CardBody>
                    <CardTitle tag="h5">{eachClass.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{eachClass.type}</CardSubtitle>
                    <CardText>{eachClass.location}</CardText>
                    <CardText>{eachClass.date}</CardText>
                    </CardBody>
                    </Card>    
                </Link>
                </div>
                )   
            })}
          </div>
        </>
    )}

export default ClassList;