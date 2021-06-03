import { Component } from 'react';
import LayoutLogin from '../../layouts/LayoutLogin';
import Login from '../../components/Login/Login';

/* LoginPage Component */
class LoginPage extends Component {

  render() {
    return (
      <LayoutLogin>
        <Login></Login>
      </LayoutLogin>
    );
  }
}

export default LoginPage;
