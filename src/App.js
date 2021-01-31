import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ImgDetail from './COMPONENT/ImgDetail/ImgDetail'
import ProductDetail from './COMPONENT/ProductDetail/ProductDetail'
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component = {ProductDetail}/>
          <Route exact path="/img-detail/" component={ImgDetail}/>
        </Switch>
        </BrowserRouter>
    </div>
  );
};

export default App;