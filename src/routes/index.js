import React from 'react'
import { Route, Switch } from 'react-router'
import LogIn from '../containers/LogIn';
import Search from '../containers/Search';
import Create from '../containers/Create';


const routes = (
  <div style={{ padding: 10 }}>
    <Switch>
      <Route exact path="/" component={LogIn} />
      <Route path="/search" component={Search} />
      <Route path="/create" component={Create} />
      <Route path="/view" component={Search} />
    </Switch>
  </div>
)

export default routes
