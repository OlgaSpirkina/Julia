import React, { Fragment, useState, useEffect } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Paintings from './components/Paintings'
import Details from './components/Details'
import Gallery from './components/Gallery'
import About from './components/pages/About'
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
          <Route exact path='/about' component={About} />
          <Route exact path='/details/:category' render={props => (
            <Details
              {...props}
              paintings={paintings}
            />
          )} />
        </Switch>
      </Fragment>
    </HashRouter>

  )
}

export default App;

/*
Calling fake API as well as useEffect hook were removed because of the category buttons issue: difficulty to rerender the quotes when using category buttons
Using data.js to get the quotes, images, etc.
*/
/*
const [quotes, setQuotes] = useState([]);
// call an json-server to display all the quotes
  useEffect(() => {
    async function searchQuotes(){
      const res = await fetch('https://my-json-server.typicode.com/OlgaSpirkina/mindfulness/quotes');
      const data = await res.json();
      setQuotes(data);
    }

    searchQuotes();
  }, [])
*/
