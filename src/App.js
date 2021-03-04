import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

import EachClass from "./components/EachClass"
import NewClassForm from "./components/NewClassForm"

import dummydata from "./dummydata"
import SearchBar from "./components/SearchBar"

import UserLogin from './components/UserLogin';
import NewUser from './components/NewUser';

function App() {
  const [classesState, setClassesState] = useState(dummydata);
  // console.log(classesState);

  // function to enable instructors to add new classes
  const instructorAddNewClass = (c) => {
    setClassesState([...classesState, {...c, id: Date.now()}])
  }

  return (
    <div className="App">
            <nav className="nav-links">
                <h1>Anywhere Fitness</h1>
                <Link to="/class-list">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/newclass-form">Add New Class</Link>
            </nav>
      <Switch>
      <Route path="/class-list/:classID">
        <EachClass classesD={classesState} />
      </Route>
      <Route path="/class-list">
        <SearchBar classesD={classesState} />
      </Route>
      <Route path='/login' component={UserLogin} />
      <Route path='/sign-up' component={NewUser} />
      <Route path="/newclass-form">
        <NewClassForm addNewClass={instructorAddNewClass} />
      </Route>
      </Switch>
    </div>
  );
}

export default App;

// data state should live here
// we need to create a dummy data folder that includes all the data for classes
// routing to different componeents happens here
// home page 