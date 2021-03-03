import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './ClassList.css';

import { classContext } from '../contexts/index';

function ClassList() {
	const [classes] = useContext(classContext)
	return (
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
	);
}

export default ClassList;