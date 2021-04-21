import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LayoutArea from '../../layouts/LayoutArea'

/* AdminPage Component */
class AdminPage extends React.Component{

  list = [
    {name: 'Users', path: '/admin/user'},
    {name: 'Config', path: '/admin/config'}
  ];

  render(){
    return(
      /* Use LayoutAdmin */
      <LayoutArea items = {this.list} defaultSelected = {-1}>
        <Switch>
        <Route path = '/admin/user' exact render = {() => <h3>User Component</h3>}></Route>
          <Route path = '/admin/config' exact render = {() => <h3>Config Component</h3>}></Route>
        </Switch>
      </LayoutArea>
    );
  }
}

export default AdminPage;