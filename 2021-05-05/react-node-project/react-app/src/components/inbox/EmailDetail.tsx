import {Component} from 'react';
import ProgressBar from '../../UI/ProgressBar';
import Card from '../../UI/Card'
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';
import axios from '../../axios';

interface IMatchParams{
  id: string;
}

interface IProps extends RouteComponentProps<IMatchParams>{
}

interface IState {
  loading: boolean;
  data: {title: string, body: string} | null;
  error: any;
}

class EmailDetail extends Component<IProps> {

  /* Set state */
  state: IState = {
    loading: true,
    data: null,
    error: null
  };

  render() { return <EmailDetailView {...this.state} {...this.props}></EmailDetailView> };

  componentDidMount() {

    /* fetch id (route params) from adress bar */
    const id = this.props.match.params.id;

    /*  fethc userId & name (query params) from address bar */
    const parsed = queryString.parse(this.props.location.search);
    console.log('Email query params: ', parsed);
    
    // Fetch data from backend
    axios.get(`/api/posts/${id}`)
      .then(response => this.setState({ loading: false, data: response.data, error: null }))
      .catch(error => this.setState({ loading: false, data: null, error: error }))
  }
}

interface IPropsEmailDetailView extends RouteComponentProps{
  loading: boolean;
  data: {title: string, body: string} | null;
  error: any;
}

/* Create a view for Inbox Class */
class EmailDetailView extends Component<IPropsEmailDetailView>{

  backButtonSelectedHandler(){
    console.log('Email Detail View back button clicked');
    this.props.history.goBack();
  }

  renderLoading() {
    const dataTSX = <ProgressBar></ProgressBar>
    return dataTSX;
  }

  renderSucces() {
    const dataTSX = <Card title={this.props.data?.title} body={this.props.data?.body} clicked = {() => this.backButtonSelectedHandler()}></Card>
    return dataTSX;
  }

  renderError() {
    const dataTSX = <h3>Error.....</h3>
    return dataTSX;
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.data) {
      return this.renderSucces();
    } else {
      return this.renderError();
    }
  }
}

export default EmailDetail;


