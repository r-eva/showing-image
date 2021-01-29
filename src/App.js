import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ImgDetail from './COMPONENT/ImgDetail'
import ProductDetail from './COMPONENT/ProductDetail'

const App = () => {
  return (
    <div>
        <Switch>
          <Route exact path="/" component = {ProductDetail}/>
        </Switch>
        <Route exact path="/img-detail/" component={ImgDetail}/>
    </div>
  );
};

export default App;