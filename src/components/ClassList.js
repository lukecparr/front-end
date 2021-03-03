import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './ClassList.css';

import { classContext, userContext } from '../contexts/index';

function ClassList() {
	const [classes] = useContext(classContext);
	const [userRole] = useContext(userContext);

	return (
		<>
			{/* Here's how we can do conditional elements for instructors vs clients */}
			{userRole === 'instructor' ? <h1>Logged in as {userRole}</h1> : ''}
			
			<div className='class-list'>
				{classes.map(eachClass => {
					return (
						<div className='class-card' key={eachClass.id}>
							<Link to={`/class-list/${eachClass.id}`}>
								<img
									className='class-mini-image'
									src={eachClass.url}
									alt={eachClass.type}
								/>
								<h2>{eachClass.name}</h2>
								<p>{eachClass.type}</p>
							</Link>
							<p>{eachClass.location}</p>
							<p>{eachClass.date}</p>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default ClassList;