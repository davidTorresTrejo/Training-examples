import React from 'react';
import MasterLayout from '../layouts/MasterLayout';
import HomePage from '../containers/HomePage/HomePage';
import AdminPage from './AdminPage/AdminPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

/* App Component  */
class App extends React.Component{
  render(){
    return(
      /* Use the BrowserRoute and Switch to choose */
      <BrowserRouter>
        <Switch>
        <Route exact path = "/">                    {/* Route to HomePage (exact) */}     
          <MasterLayout>
            <HomePage></HomePage>
          </MasterLayout>
        </Route>
        <Route path = "/admin">                     {/* Route to AdminPage (exact) */}     
          <MasterLayout>
            <AdminPage></AdminPage>
          </MasterLayout>
        </Route>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

/* Add switch and route */
