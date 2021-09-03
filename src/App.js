import React, { Fragment, useState, useEffect } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Paintings from './components/Paintings'
import './App.css';

function App() {
  const [paintings, setPaintings] = useState([]);
  useEffect(() => {
    async function getPaintings(){
      const res = await fetch('https://my-json-server.typicode.com/OlgaSpirkina/Julia/paintings');
      const data = await res.json();
      setPaintings(data);
      console.log(data);
    }
    getPaintings();
  }, [])

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Paintings paintings={paintings} />
      </Fragment>
    </Router>
  );
}

export default App;
