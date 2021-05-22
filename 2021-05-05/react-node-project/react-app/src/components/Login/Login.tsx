import { Component } from 'react';
import LoginForm from '../../UI/LoginForm';

class Login extends Component{

    onLoginClickHandler = (email: string, password: string) => {
        console.log(`email: ${email} , password: ${password}`);
    }

    render () { return <LoginView {...this.props} loginHandler={this.onLoginClickHandler}></LoginView>};
}

interface Iprops{
    loginHandler: any;
}

class LoginView extends Component<Iprops>{
    
    render(){
        return(
            <LoginForm loginHandler={this.props.loginHandler}></LoginForm>
        );
    }

}

export default Login;
