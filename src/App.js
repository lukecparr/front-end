import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import EachClass from "./components/EachClass"

import dummydata from "./dummydata"
import ClassList from "./components/ClassList"

import UserLogin from './components/UserLogin';

function App() {
  const [classes, setClasses] = useState(dummydata);

  return (
    <div className="App">
      <Route path='/login' component={UserLogin} />
      <Route path="/class-list/:classID">
        <EachClass classesD={classes} />
      </Route>
      <Route path="/class-list">
        <ClassList classesD={classes} />
      </Route>
    </div>
  );
}

export default App;

// data state should live here
// we need to create a dummy data folder that includes all the data for classes
// routing to different componeents happens here
// home page 