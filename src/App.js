import React, { Fragment, useState, useEffect } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Paintings from './components/Paintings'
import Gallery from './components/Gallery'
import './App.css';

function App() {
  const [paintings, setPaintings] = useState([]);
  useEffect(() => {
    async function getPaintings(){
      const res = await fetch('https://my-json-server.typicode.com/OlgaSpirkina/Julia/paintings');
      const data = await res.json();
      setPaintings(data);
    }
    getPaintings();
  }, [])

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" render={props =>(
            <Paintings paintings={paintings} />
          )}/>
          <Route exact path='/gallery' render={props =>(
            <Gallery paintings={paintings} />
          )} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
