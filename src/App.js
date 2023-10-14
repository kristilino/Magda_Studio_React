import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/pages/Signup';
import Chloris from './components/pages/Chloris';
import Ares from './components/pages/Ares';
import Aura from './components/pages/Aura';
import Aphrodite from './components/pages/Aphrodite';
import Apollon from './components/pages/Apollon';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/chloris' component={Chloris} />
          <Route path='/ares' component={Ares} />
          <Route path='/aura' component={Aura} />
          <Route path='/aphrodite' component={Aphrodite} />
          <Route path='/apollon' component={Apollon} />
      

        </Switch>
      </Router>
    </>
  );
}

export default App;
