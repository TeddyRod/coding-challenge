import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NavMain from './components/NavMain';
import Home from './ pages/Home';
import Temperature from './pages/Temperature';
import CustomozeImage from './pages/CustomizeImage';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/temperature" component={Temperature} />
        <Route excat path="/customize-image" component={CustomozeImage} />
      </Switch>
    </div>
  );
}

export default App;
