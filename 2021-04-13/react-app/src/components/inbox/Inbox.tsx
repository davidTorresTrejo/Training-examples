import axios from 'axios';
import React from 'react';
import MyPaper from '../../UI/MyPaper';
import MyProgressBar from '../../UI/MyProgress';

interface IProps {
  loading: boolean;
  data: any;
  error: any;
}

class Inbox extends React.Component {

  /* Set state */
  state = {
    loading: true,
    data: null,
    error: null
  };

  render() { return <InboxView {...this.state}></InboxView> };

  componentDidMount() {
    

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.setState({ loading: false, data: response.data, error: null }))
      .catch(error => console.log(error))

    // Fetch data from backend
    // const res = fetch('url')
    // then ( data => console.log(data))
    //.catch(error => concole.log(error))
  }
}


/* Create a view for Inbox Class */
class InboxView extends React.Component<IProps>{

  mailSelectedHandler(id: string) {
    console.log('Selected Email', id);

  }

  renderLoading() {
    const dataTSX = <MyProgressBar></MyProgressBar>
    return dataTSX;
  }

  renderSucces() {
    const dataTSX = this.props.data.map((item: any) => {
      return <MyPaper
        key={item.id}
        title={item.title}
        body={item.body}
        clicked={() => this.mailSelectedHandler(item.id)}
      />
    })
    return dataTSX;
  }

  renderError() {
    const dataTSX = <h3>Error.....</h3>
    return dataTSX;
  }

  render() {
    console.log('Inbox props: ', this.props);

    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.data) {
      return this.renderSucces();
    } else {
      return this.renderError();
    }
  }
}

export default Inbox;




/*
  Use json place holder
  install axios
*/



