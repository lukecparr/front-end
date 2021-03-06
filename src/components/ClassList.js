import React from "react";
import { Link } from "react-router-dom";

import './ClassList.css'; 
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

function ClassList(props) {

    return (
        <>      
          <div className="class-list">
            {props.classesD.map(eachClass => {
                return (
									<div className='class-card' key={eachClass.id}>
										<Link to={`/class-list/${eachClass.id}`}>
											<Card>
												<CardImg topWidth='100%' src={eachClass.url} alt={eachClass.type} />
												<CardBody>
													<CardTitle tag='h5'>{eachClass.name}</CardTitle>
													<CardSubtitle tag='h6' className='mb-2 text-muted'>
														{eachClass.type}
													</CardSubtitle>
													<CardText>{eachClass.location}</CardText>
													<CardText>{eachClass.date}</CardText>
												</CardBody>
											</Card>
										</Link>
									</div>
								);   
            })}
          </div>
        </>
    )}

export default ClassList;