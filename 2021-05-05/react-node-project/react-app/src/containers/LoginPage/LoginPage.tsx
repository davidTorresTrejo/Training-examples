import { Component } from 'react';
/* import LayoutArea from '../../layouts/LayoutArea';
import { Route, Switch } from 'react-router-dom'; */

/* Import LoginForm  */
import LoginForm from '../../UI/LoginForm';

/* LoginPage Component */
class LoginPage extends Component {

/* I need to create another layout specific for logging purpose */

  render() {
    return (
      <LoginForm></LoginForm>
    );
  }
}

export default LoginPage;
