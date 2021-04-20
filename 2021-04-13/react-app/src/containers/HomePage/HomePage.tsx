import { Component } from 'react';
import LayoutArea from '../../layouts/LayoutArea';
import {Route, Switch} from 'react-router-dom';
import Inbox from '../../components/inbox/Inbox'

/* HomePage Component */
class HomePage extends Component{

  render(){
    return(
      /* 
        Use LayoutHome 
        Add list in props, implement Rout and Switch
        Use inbox Component  
      */
      <LayoutArea items =  {['Inbox', 'Starred']}>
        <Switch>
          <Route path = '/' exact render = {() => <h3>Welcome to Home!</h3>}></Route>
          <Route path = '/home/inbox' exact render = {() => <Inbox></Inbox>}></Route>
          <Route path = '/home/starred' exact render = {() => <h3>Inbox Starred</h3>}></Route>
        </Switch>
      </LayoutArea>
    );
  }
}

export default HomePage;
/* Add Route  */
