import React from 'react';
import MasterLayout from '../layouts/MasterLayout';
import HomePage from '../containers/HomePage/HomePage'
import AdminPage from '../containers/AdminPage/AdminPage'
import PageNotFound from '../containers/PageNotFound/PageNotFound'
import {Route, Switch} from 'react-router-dom';

/* App Component  */
class App extends React.Component{
  render(){
    return(
      /* Use the BrowserRoute and Switch to choose */
      <MasterLayout>
        <Switch>
          <Route path = "/" exact component = {HomePage}></Route>
          <Route path = "/admin" component = {AdminPage}></Route>
          <Route render = {() => <PageNotFound title = "Page Not Found...."/>}/>
        </Switch>
      </MasterLayout> 

    );
  }
}

export default App;

/* Add switch and route */
