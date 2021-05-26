import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import { store } from './redux/store';


const instance: AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:3500'
    /* Put URL from Backend */
});


instance.interceptors.request.use((request: AxiosRequestConfig) => {
    
    request.headers[`AUTH_TOKEN`] = store.getState().auth.token;
    console.log('Axios Interceptors: ', request.url);
    return request;
}, error => {
    return Promise.reject(error);
});


instance.interceptors.response.use((response: AxiosResponse) => {
    console.log('Axios Interceptors Response: ', response.data);
    return response;
}, error => {
    return Promise.reject(error);
});

export default instance;