/* Make the same that in Inbox.tsx */
import axios from 'axios';
import React from 'react';
import MyProgressBar from '../../UI/MyProgress';
import MyTable from '../../UI/MyTable';

interface IProps {
  loading: boolean;
  data: any;
  error: any;
}

class Users extends React.Component {

  /* Set state */
  state = {
    loading: true,
    data: null,
    error: null
  };

  render() { return <UsersView {...this.state}></UsersView> };

  componentDidMount() {

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        // modify data here (Custom Data)
        const users: any[] = response.data;
        const modUsers = users.map((user: any) => {
          return { User: user.userId, Email: user.id, City: user.title, Phone: user.body };
        });
        this.setState({ loading: false, data: modUsers, error: null });

      })
      .catch(error => this.setState({ loading: false, data: null, error: error }));
    // Fetch data from backend
    // const res = fetch('url')
    // then ( data => console.log(data) )
    //.catch(error => concole.log(error))
  }
}


/* Create a view for Inbox Class */
class UsersView extends React.Component<IProps>{

  renderLoading() {
    const dataTSX = <MyProgressBar></MyProgressBar>
    return dataTSX;
  }

  renderSucces() {
    const dataTSX = <MyTable rows={this.props.data}></MyTable>
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

export default Users;

