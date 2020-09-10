import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { About } from './About';
import { Proyects } from './Proyects';
import { Contact } from './Contact';
import { Error } from './Error';

import { Layout } from './components/Layout';
import { NavBar } from './components/NavBar';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Layout>
          {/* Props that children */}
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/About' component={About} />
              <Route path='/Proyects' component={Proyects} />
              <Route path='/Contact' component={Contact} />
              <Route component={Error} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  };
};

export default App;
