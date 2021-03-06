import {Component} from 'react';
import { RouteComponentProps } from 'react-router';
import MyPaper from '../../UI/MyPaper';
import MyProgressBar from '../../UI/MyProgress';
import axios from '../../axios';


interface IProps extends RouteComponentProps{

}


interface IState {
  loading: boolean;
  data: {} [] | null;
  error: any;
}

class Inbox extends Component <IProps> {

  /* Set state */
  state: IState = {
    loading: true,
    data: null,
    error: null
  };

  render() { return <InboxView {...this.state} {...this.props}></InboxView> };

  componentDidMount() {
    

    axios.get('/posts')
      .then(response => this.setState({ loading: false, data: response.data, error: null }))
      .catch(error => this.setState({loading: false, data: null, error: error}))

    // Fetch data from backend
    // const res = fetch('url')
    // then ( data => console.log(data))
    //.catch(error => concole.log(error))
  }
}


interface IpropsInboxView extends RouteComponentProps{
  loading: boolean;
  data: {}[] | null;
  error: any;
}

/* Create a view for Inbox Class */
class InboxView extends Component<IpropsInboxView>{

  mailSelectedHandler(id: string, userId: string) {
    /* console.log('Selected Email', id); */
    this.props.history.push({pathname: `/home/inbox/${id}`, search: `?userId-${userId}`});
  }

  renderLoading() {
    const dataTSX = <MyProgressBar></MyProgressBar>
    return dataTSX;
  }

  renderSucces() {
    const dataTSX = this.props.data?.map((item: any) => {
      return <MyPaper
        key={item.id}
        title={item.title}
        body={item.body}
        clicked={() => this.mailSelectedHandler(item.id, item.userId)}
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



