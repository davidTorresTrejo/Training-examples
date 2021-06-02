import React from 'react';
import MasterLayout from '../layouts/MasterLayout';
import HomePage from '../containers/HomePage/HomePage';
import AdminPage from '../containers/AdminPage/AdminPage';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import LoginPage from '../containers/LoginPage/LoginPage';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

interface IProps {
  isAuthenticated: boolean;
}

/* App Component  */
class App extends React.Component<IProps>{
  render() {

    let routes = (
      <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/home" component={HomePage}></Route>
          {/* <Route path="/admin" component={AdminPage}></Route> */}
          <Route path="/login" component={LoginPage}></Route>
          <Route render={() => <PageNotFound title="Page Not Found...." />} />
        </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/home" component={HomePage}></Route>
          <Route path="/admin" component={AdminPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route render={() => <PageNotFound title="Page Not Found...." />} />
        </Switch>
      );
    }

    return (
      /* Use the BrowserRoute and Switch to choose Add /home path */
      <MasterLayout>
        {routes}
      </MasterLayout>

    );
  }
}

/* Subscribe to Central Store */
const mapStateToProps = (store: any) => ({
  isAuthenticated: store.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
/* export default App; */
/* Add switch and route */
/* Install Axios  */
