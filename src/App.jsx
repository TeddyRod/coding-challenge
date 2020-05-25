import React from 'react';
import {Switch, Route} from 'react-router-dom';
import NavMain from './components/NavMain';
import home from './pages/home';
import temperature from './pages/temperature';
import customozeImage from './pages/customizeImage';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/temperature" component={temperature} />
        <Route excat path="/customize-image" component={customozeImage} />
      </Switch>
    </div>
  );
}

export default App;
