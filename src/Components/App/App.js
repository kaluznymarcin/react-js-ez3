import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import Sections from '../Sections';
import Section from '../Section';
import Photo from '../Photo';

const App = (props) =>  (
  <Router>
    <div>
      <Link to="/">Sections</Link><br />
      <Link to="/section/37284328">Section</Link><br />
      <Link to="/photo/432432">Photo</Link><br />
    </div>
    <Switch>
      <Route path="/section/:id">
        <Section />
      </Route>
      <Route path="/photo/:id">
        <Photo />
      </Route>
      <Route path="/">
        <Sections  />
      </Route>
    </Switch>
    <div>Footer</div>
  </Router>
);

export default App;

/* <GridList>
      <Card title="Card 1" />
      <CartWithBg title="Card 2" time={2 * 1000} />
      <Card title="Card 3" />
      <CartWithBg title="Card 4" />
    </GridList> */
