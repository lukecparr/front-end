import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function ClassList (props) {
  

    const {classesD} = props;
    return (
        <div className="class-list">
            {classesD.map(eachClass => {
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
            })}
        </div>
    )}

export default ClassList;