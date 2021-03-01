import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './ClassList.css'; 

function ClassList (props) {

    console.log(props.classesD);
    return (
        <div className="class-list">
            {props.classesD.map(eachClass => {
                return (
                    <div className="class-card" key={eachClass.id}>
                <Link to={`/class-list/${eachClass.id}`}> 
                    <img
                    className="class-mini-image"
                    src={eachClass.url}
                    alt={eachClass.type}
                        />
                    <h2>{eachClass.name}</h2>
                    <p>{eachClass.type}</p>
                    <p>{eachClass.location}</p>
                    <p>{eachClass.date}</p>
                </Link>
                </div>
                )   
            })}
        </div>
    )}

export default ClassList;