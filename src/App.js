import React, { Fragment, useState, useEffect, useRef } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Paintings from './components/Paintings'
import Details from './components/Details'
import Gallery from './components/Gallery'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import ArrowUp from './components/ArrowUp'
import './App.css';

// scroll to the top of the page
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // Start scroll to top
  const navbarRef = useRef(null);
  const executeScroll = () => scrollToRef(navbarRef);
  // Finish scroll to top

  /* detect if small screen */
  useEffect(() => {
  const changeWidth = () => {
    setScreenWidth(window.innerWidth);
  }
  window.addEventListener('resize', changeWidth)
  /* delete eventListener if function changeWidth is deleted */
  return()=>{
    window.removeEventListener('resize', changeWidth)
  }
  },[])


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
        <div ref={navbarRef}></div>
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
          <Route exact path='/contact' component={Contact} />
        </Switch>
        {screenWidth <= 1200  &&(
          <ArrowUp onClick={executeScroll} />
        )}
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
