import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import UserLogin from './components/UserLogin';
import NewUser from './components/NewUser';

function App() {
  return (
    <div className="App">
      <Route path='/login' component={UserLogin} />
      <Route path='/sign-up' component={NewUser} />
    </div>
  );
}

export default App;
