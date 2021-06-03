import { Component } from 'react';
import LayoutArea from '../../layouts/LayoutArea';
import { Route, Switch } from 'react-router-dom';
import Inbox from '../../components/inbox/Inbox'
import EmailDetail from '../../components/inbox/EmailDetail'
import Counter from '../../components/Counter/Counter';
import { connect } from 'react-redux';
import Starred from '../../components/Starred/Starred';


interface IProps {
  isAuthenticated: boolean;
  user: any;
}

/* HomePage Component */
class HomePage extends Component<IProps>{

  list = [
    { name: 'Inbox', path: '/home/inbox' },
    { name: 'Starred', path: '/home/starred' },
    { name: 'Counter', path: '/home/counter' }

  ];

  render() {

    let routes = (
      <Switch>
        <Route path="/" exact render={() => <h3>Welcome to Home!</h3>}></Route>
        <Route path="/home/inbox" exact component={Inbox}></Route>
        <Route path="/home/inbox/:id" component={EmailDetail}></Route>
        <Route path="/home/starred" exact component={Starred}></Route>
        <Route path="/home/counter" exact component={Counter}></Route>
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path="/" exact render={() => <h3>Welcome {this.props.user.name}!</h3>}></Route>
          <Route path="/home/inbox" exact component={Inbox}></Route>
          <Route path="/home/inbox/:id" component={EmailDetail}></Route>
          <Route path="/home/starred" render={() => <h3>Inbox Starred</h3>}></Route>
          <Route path="/home/counter" exact component={Counter}></Route>
        </Switch>
      );
    }

    return (
      /* Use LayoutHome  Add list in props, implement Rout and Switch Use inbox Component  */
      <LayoutArea items={this.list} defaultSelected={-1}>
        {routes}
      </LayoutArea>
    );
  }
}

/* Subscribe to Central Store */
const mapStateToProps = (store: any) => ({
  isAuthenticated: store.auth.isAuthenticated,
  user: store.auth.user
});

export default connect(mapStateToProps)(HomePage);
