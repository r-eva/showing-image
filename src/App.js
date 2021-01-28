import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ImgDetail from './COMPONENT/ImgDetail'
import ProductDetail from './COMPONENT/ProductDetail'

const App = () => {
  return (
    <div className="m-5">
        <Switch>
          <Route exact path="/" component = {ProductDetail}/>
          <Route exact path="/img-detail/" component={ImgDetail}/>
        </Switch>
    </div>
  );
};

export default App;