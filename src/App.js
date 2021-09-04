import React, { Fragment, useState, useEffect } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Paintings from './components/Paintings'
import Gallery from './components/Gallery'
import Details from './components/Details'
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
    <HashRouter>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" render={props =>(
            <Paintings paintings={paintings} />
          )}/>

          <Route exact path='/gallery'
            render={props => (
              <Gallery
                paintings={paintings}
              />
            )}
          />
          <Route exact path='/details:category' render={props =>(
            <Details
              {...props}
              paintings={paintings}
            />
          )} />
        </Switch>
      </Fragment>
    </HashRouter>
  );
}

export default App;
/*
<Route exact path='/details:category' render={props =>(
  <Details
    {...props}
    paintings={paintings}
  />
)} />
*/
