/* Make the same that in Inbox.tsx */
import React from 'react';
import MyProgressBar from '../../UI/MyProgress';
import MyTable from '../../UI/MyTable';
import axios from '../../axios';

class Users extends React.Component {

  /* Set state */
  state = {
    loading: true,
    data: null,
    error: null
  };

  searchKeyPressHandler = (event: any) => {
    if (event.key === `Enter`){
      /* console.log( `data: `, event.target.value); */
      const getOption = event.target.value;
      this.fetchUsers(`/api/users?name=${getOption}`);
    }
  }

  fetchUsers = (route: string) => {
    axios.get(route)
      .then(response => {
        const users: any[] = response.data;
        const modUsers = users.map((user: any) => {
          return { User: user.name, Email: user.email, City: user.address.city, Phone: user.phone, Company: user.company.name };
        });
        this.setState({ loading: false, data: modUsers, error: null });
      })
      .catch(error => this.setState({ loading: false, data: null, error: error }));
  }


  componentDidMount() {
    this.fetchUsers(`/api/users`);
  }

  render() { return <UsersView {...this.state} searchHandler={this.searchKeyPressHandler}></UsersView> };
}

interface IProps {
  loading: boolean;
  data: any;
  error: any;
  searchHandler: any;
}


/* Create a view for Inbox Class */
class UsersView extends React.Component<IProps>{

  renderLoading() {
    const dataTSX = <MyProgressBar></MyProgressBar>
    return dataTSX;
  }

  renderSucces() {
    const dataTSX = <MyTable rows={this.props.data} searchHandler={this.props.searchHandler} ></MyTable>
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

