import ReactDOM from 'react-dom';
import App from './containers/App';
import 'fontsource-roboto';
import { BrowserRouter } from 'react-router-dom';

/* Rendering App Component */
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

/*
    Install React-Route and React-Router-Dom  @types/react-router-dom
    import {BrowserRoute} from 'react-router-dom'

*/

/* Browser Route Here */

/* 
    Move Layouts into UI
    Create axios.tsx - indextsx

    import axios, {AxiosIntsance} from 'axios'
    const instance: AxiosInstance = axios.create({
        baseURL: url from jsonPlaceHolder

    });

    export default axios;


    import in users, emailDetail, posts

*/