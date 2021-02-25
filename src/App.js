import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import UserLogin from './components/UserLogin';

function App() {
  return (
    <div className="App">
      <Route path='/login' component={UserLogin} />
    </div>
  );
}

export default App;
