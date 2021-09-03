import React, { Fragment } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
      </Fragment>
    </Router>
  );
}

export default App;
