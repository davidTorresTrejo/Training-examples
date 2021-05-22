import { Component } from 'react';
import LayoutLogin from '../../layouts/LayoutLogin';
import Login from '../../components/Login/Login';

/* LoginPage Component */
class LoginPage extends Component {

  /* I need to create another layout specific for logging purpose */

  render() {
    return (
      <LayoutLogin>
        <Login></Login>
      </LayoutLogin>
    );
  }
}

export default LoginPage;
