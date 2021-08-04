import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import MyTops from './pages/MyTops';
import Recommendation from './pages/Recommendation';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Home} />
        <Route path="/MyTops" exact component={MyTops} />
        <Route path="/Recommandation" exact component={Recommendation} />
        <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;