import React, { Component } from 'react';
import LoginForm from './containers/LoginForm/LoginForm';
import Home from './containers/Home/Home';
import { Route, Switch } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <Switch>
        <Route path='/home' component={Home}></Route>
        <Route path='/' component={LoginForm}></Route>
      </Switch>
    )
  }
}

export default App;
