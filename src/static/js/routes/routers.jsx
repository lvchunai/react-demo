import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import FilterableProductTable from '../views/productFilter/filterableProductTable';
import Home from '../views/common/home';

class Routers extends React.Component {

  render() {
    return <section className="main-content">
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/filter-product' component={FilterableProductTable} />
          <Route exact path='/test' component={FilterableProductTable} />
        </Switch>
      </HashRouter>
    </section>; 
  }
}

export default Routers;