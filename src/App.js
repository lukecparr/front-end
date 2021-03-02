import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

import EachClass from "./components/EachClass"
import ClassList from "./components/ClassList"
import UserLogin from './components/UserLogin';
import NewUser from './components/NewUser';

import { classContext, userContext } from './contexts';
import axiosWithAuth from './utils/axiosWithAuth';

import dummydata from './dummydata';

function App() {
  const [classes, setClasses] = useState(dummydata);

  const fetchClasses = () => {
		axiosWithAuth.get('/users/classes')
			.then(res => setClasses(res.data))
			.catch(err => console.log(err.message));
	};

  return (
		<div className='App'>
			<nav>
				<h1 className='app-header'>AnywhereFitness</h1>
				<div className='nav-links'>
					<Link to='/class-list'>Home - All Classes</Link>
					<Link to='/login'>Login</Link>
				</div>
			</nav>

			<classContext.Provider value={classes}>
				<Route path='/class-list/:classID' component={EachClass} />
			</classContext.Provider>

			<Route exact path='/class-list'>
				<ClassList classesD={classes} />
			</Route>

			<Route path='/login' component={UserLogin} />
			<Route path='/sign-up' component={NewUser} />
		</div>
	);
}

export default App;

// data state should live here
// we need to create a dummy data folder that includes all the data for classes
// routing to different componeents happens here
// home page 