import React, { useState, useEffect } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import './App.css';

import ClassList from "./components/ClassList"
import EachClass from "./components/EachClass"
import NewClassForm from "./components/NewClassForm"

import dummydata from "./dummydata"
import SearchBar from "./components/SearchBar"

import UserLogin from './components/UserLogin';
import NewUser from './components/NewUser';
import PrivateRoute from './components/PrivateRoute';

import { classContext, userContext } from './contexts';
import axiosWithAuth from './utils/axiosWithAuth';

import dummydata from './dummydata';

function App() {
	const [classes, setClasses] = useState(dummydata);
	const [userRole, setUserRole] = useState('')
	const history = useHistory();
	
  const fetchClasses = () => {
		axiosWithAuth().get('/users/classes')
			.then(res => setClasses(res.data.data))
			.catch(err => console.log(err.message))
	}
  
  // function to enable instructors to add new classes
  const instructorAddNewClass = (c) => {
    setClassesState([...classesState, {...c, id: Date.now()}])
  }

  useEffect(() => {
    //Gets classes on app render
    // fetchClasses();

		//Fakes a login so we can see PrivateRoutes without logging in each time.
		// localStorage.setItem('token', 'yes');

  }, [])

	const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem('token');
		history.push('/login');
	}

  return (
		<div className='App'>
			<nav>
				<h1 className='app-header'>AnywhereFitness</h1>
				<div className='nav-links'>
					<Link to='/'>Home - All Classes</Link>
					<Button color='primary' onClick={logout}>Logout</Button>
				</div>
			</nav>

			<userContext.Provider value={[userRole, setUserRole]}>
				<classContext.Provider value={[classes, fetchClasses]}>
					<PrivateRoute path='/class-list/:classID' component={EachClass} />
					<PrivateRoute exact path='/' component={SearchBar} />
          <PrivateRoute path="/newclass-form" component={NewClassForm} />
				</classContext.Provider>

				<Route path='/login' component={UserLogin} />
				<Route path='/sign-up' component={NewUser} />
			</userContext.Provider>
		</div>
	);
}

export default App;

// data state should live here
// we need to create a dummy data folder that includes all the data for classes
// routing to different componeents happens here
// home page 