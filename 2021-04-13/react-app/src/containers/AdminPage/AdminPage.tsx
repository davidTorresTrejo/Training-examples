import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LayoutArea from '../../layouts/LayoutArea';
import Users from '../../components/Users/Users';

/* AdminPage Component */
class AdminPage extends React.Component {

  list = [
    { name: 'Users', path: '/admin/user' },
    { name: 'Roles', path: '/admin/roles' }
  ];

  render() {
    return (
      /* Use LayoutAdmin */
      <LayoutArea items={this.list} defaultSelected={-1}>
        <Switch>
          <Route path='/admin/user' exact render={() => <Users></Users>}></Route>
          <Route path='/admin/roles' exact render={() => <h3>Config Component</h3>}></Route>
        </Switch>
      </LayoutArea>
    );
  }
}

export default AdminPage;