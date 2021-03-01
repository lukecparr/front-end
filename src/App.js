import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import EachClass from "./components/EachClass"

import dummydata from "./dummydata"
import ClassList from "./components/ClassList"

import UserLogin from './components/UserLogin';

function App() {
  const [classesState, setClassesState] = useState(dummydata);
  console.log(classesState);

  //need to add links with NAV 
  // need to add title
  // need to switch statement

  return (
    <div className="App">
      <nav>
        <h1 className="app-header">AnywhereFitness</h1>
        <div className="nav-links">
          <Link to="/class-list">Home - All Classes</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
      <Switch>
      <Route path="/class-list/:classID">
        <EachClass classesD={classesState} />
      </Route>
      <Route path="/class-list">
        <ClassList classesD={classesState} />
      </Route>
      <Route path='/login' component={UserLogin} />
      </Switch>
    </div>
  );
}

export default App;

// data state should live here
// we need to create a dummy data folder that includes all the data for classes
// routing to different componeents happens here
// home page 