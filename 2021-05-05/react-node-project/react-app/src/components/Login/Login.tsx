import { Component } from 'react';
import { Redirect } from 'react-router';
import LoginForm from '../../UI/LoginForm';
import axios from '../../axios';
import { dataValidation } from '../../shared/validation';
import { IsEmail, IsString, Length } from 'class-validator';
import { connect } from 'react-redux';
import { authStartAction, authSuccessAction, authErrorAction } from '../../redux/actions/login';


/* Class For Authentication */

export class AuthUserValidation {

    @IsEmail({}, { message: `Email is invalid` })
    email?: string;

    @IsString({ message: `Password must be a string` })
    @Length(3, 8, { message: `Password must be beetwen : 3 - 8 characters` })
    password?: string;
}

/* Whit out Redux */
/* class Login extends Component {

    state = { authenticating: false, token: null, user: null, error: null, isAuthenticated: false };

    onLoginClickHandler = async (email: string, password: string) => {
        console.log(`email: ${email} , password: ${password}`);

        //Setting up progress bar
        this.setState({ authenticating: true, token: null, user: null, error: null, isAuthenticated: false });

        //Validate email & password
        const errors = await dataValidation(AuthUserValidation, { email, password });

        if (errors) {
            //Setting up progress bar
            console.log(`Data Validation Failed: `, errors);
            this.setState({ authenticating: false, token: null, user: null, error: errors, isAuthenticated: false });
        } else {
            //Authenticate User
            axios.post(`/api/auth`, { email: email, password: password })
                .then(response => {
                    if (response.data.length) {
                        console.log(`API Validation Successful, user found:  `, response.data[1].token, response.data[0]);
                        this.setState({ authenticating: false, token: response.data[1].token, user: response.data[0], error: null, isAuthenticated: true });
                    } else {
                        console.log(`API Validation Successful, no user found:  `, response.data);
                        this.setState({ authenticating: false, token: null, user: null, error: `No user found`, isAuthenticated: false });
                    }
                })
                .catch(error => {
                    console.log(`API Call Failed: `, error);
                    this.setState({ authenticating: false, token: null, user: null, error: error, isAuthenticated: false });
                })
        }

    }

    render() { return <LoginView {...this.state} loginHandler={this.onLoginClickHandler}></LoginView> };
} */

interface ILoginProps{
    authenticating: boolean;
    isAuthenticated: boolean;
    error: any;
    authStartAction: any;
    authSuccessAction: any;
    authErrorAction: any;
}

/* With Redux */
class Login extends Component<ILoginProps>{

    state = { authenticating: false, token: null, user: null, error: null, isAuthenticated: false };

    onLoginClickHandler = async (email: string, password: string) => {
        console.log(`email: ${email} , password: ${password}`);

        //Setting up progress bar
        this.props.authStartAction();

        //Validate email & password
        const errors = await dataValidation(AuthUserValidation, { email, password });

        if (errors) {
            //Setting up progress bar
            console.log(`Data Validation Failed: `, errors);
            this.props.authErrorAction(errors);
        } else {
            //Authenticate User
            axios.post(`/api/auth`, { email: email, password: password })
                .then(response => {
                    if (response.data.length) {
                        console.log(`API Validation Successful, user found:  `, response.data[1].token, response.data[0]);
                        this.props.authSuccessAction(response.data);
                    } else {
                        console.log(`API Validation Successful, no user found:  `, response.data);
                        this.props.authErrorAction(`No user found`);
                    }
                })
                .catch(error => {
                    console.log(`API Call Failed: `, error);
                    this.props.authErrorAction(error)
                })
        }

    }

    render() { return <LoginView {...this.props} loginHandler={this.onLoginClickHandler}></LoginView> };
}


interface Iprops {
    authenticating: boolean;
    isAuthenticated: boolean;
    error: any;
    loginHandler: any;
}

class LoginView extends Component<Iprops>{

    render() {

        /* Check if user is authenticated seccessfully, if yes redirect to home page */
        if(this.props.isAuthenticated){
            return <Redirect to={`/`}></Redirect>
        }

        return (
            <LoginForm loginHandler={this.props.loginHandler} loading={this.props.authenticating} failure={this.props.error}></LoginForm>
        );
    }

}

/* Redux */
const mapStateToProps = ( store: any ) => ({
    authenticating: store.auth.authenticating,
    isAuthenticated: store.auth.isAuthenticated,
    error: store.auth.error
});

export default connect(mapStateToProps, { authStartAction, authSuccessAction, authErrorAction } ) (Login);

/* export default Login; */
