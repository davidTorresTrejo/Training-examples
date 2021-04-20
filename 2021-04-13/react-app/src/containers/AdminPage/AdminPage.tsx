import React from 'react';
import {Route, Switch} from 'react-router-dom';
import LayoutArea from '../../layouts/LayoutArea'

/* AdminPage Component */
class AdminPage extends React.Component{
  render(){
    return(
      /* Use LayoutAdmin */
      <LayoutArea items = {['Users', 'Config']}>
        <Switch>
        <Route path = '/admin/user' exact render = {() => <h3>User Component</h3>}></Route>
          <Route path = '/admin/config' exact render = {() => <h3>Config Component</h3>}></Route>
        </Switch>
      </LayoutArea>
    );
  }
}

export default AdminPage;