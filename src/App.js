import './App.css';
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ApplicationForm from './components/ApplicationForm';

function App() {
  return (
    <Fragment>
      <div className="App">
        <h1>Jobi</h1>
      </div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/:id" component={ApplicationForm} />
      </Switch>
    </Fragment>
  );
}

export default App;
