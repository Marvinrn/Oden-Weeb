import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import MyTops from './pages/MyTops';
import Recommendation from './pages/Recommendation';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home} />
        <Route path="/MyTops" exact component={MyTops} />
        <Route path="/Recommandation" exact component={Recommendation} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;