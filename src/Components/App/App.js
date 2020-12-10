import React from 'react';
import GridList from '../GridList'
import './App.css';

import Card from '../Card';

const App = (props) =>  (
  <div>
    <GridList>
      <Card />
      <Card />
    </GridList>
  </div>
);

export default App;
