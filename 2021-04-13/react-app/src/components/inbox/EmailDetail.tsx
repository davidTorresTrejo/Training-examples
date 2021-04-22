/* Copy paste the Inbox.tsx 
    Use Card.tsx
*/
import axios from 'axios';
import React from 'react';
import MyProgressBar from '../../UI/MyProgress';
import MyCard from '../../UI/Card'

interface IProps {
  loading: boolean;
  data: any;
  error: any;
}

class EmailDetail extends React.Component {

  /* Set state */
  state = {
    loading: true,
    data: null,
    error: null
  };

  render() { return <EmailDetailView {...this.state}></EmailDetailView> };

  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.setState({ loading: false, data: response.data, error: null }))
      .catch(error => this.setState({ loading: false, data: null, error: error }))

    // Fetch data from backend
    // const res = fetch('url')
    // then ( data => console.log(data))
    //.catch(error => concole.log(error))
  }
}


/* Create a view for Inbox Class */
class EmailDetailView extends React.Component<IProps>{

  renderLoading() {
    const dataTSX = <MyProgressBar></MyProgressBar>
    return dataTSX;
  }

  renderSucces() {
    const dataTSX = <MyCard title={this.props.data.title} body={this.props.data.body}></MyCard>
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


