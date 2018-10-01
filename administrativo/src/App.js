import React, { Component } from 'react';
import LoginForm from './containers/LoginForm/LoginForm';
import { Route, Switch } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <Switch>
        <Route path='/teste' render={ () => <div>Teste</div> }></Route>
        <Route path='/' component={LoginForm}></Route>
      </Switch>
    )
  }
}

export default App;
