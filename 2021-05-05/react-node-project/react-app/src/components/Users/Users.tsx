/* Make the same that in Inbox.tsx */
import React from 'react';
import ProgressBar from '../../UI/ProgressBar';
import Table from '../../UI/Table';
import axios from '../../axios';

/* Redux */
import { connect } from 'react-redux';
import { updateUsersAction, updateErrorAction} from '../../redux/actions/users';

interface IUserProps{
  loading: boolean;
  users: any;
  error: any;
  updateUsersAction: any;
  updateErrorAction: any;
}

class Users extends React.Component<IUserProps>{

  /* Set state */
  state = {
    loading: true,
    data: null,
    error: null
  };

  searchKeyPressHandler = (event: any) => {
    if (event.key === `Enter`){
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
        this.props.updateUsersAction(modUsers);
      })
      .catch(error => this.props.updateErrorAction(error));
  }


  componentDidMount() {
    this.fetchUsers(`/api/users`);
  }

  render() { return <UsersView {...this.props} searchHandler={this.searchKeyPressHandler}></UsersView> };
}

interface IProps {
  loading: boolean;
  users: any;
  error: any;
  searchHandler: any;
}


/* Create a view for Inbox Class */
class UsersView extends React.Component<IProps>{

  renderLoading() {
    const dataTSX = <ProgressBar></ProgressBar>
    return dataTSX;
  }

  renderSucces() {
    const dataTSX = <Table rows={this.props.users} searchHandler={this.props.searchHandler} ></Table>
    return dataTSX;
  }

  renderError() {
    const dataTSX = <h3>Error.....</h3>
    return dataTSX;
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.users) {
      return this.renderSucces();
    } else {
      return this.renderError();
    }
  }
}

/* Connect to Redux */
const mapStateToProps = (store: any) => ({
  loading: store.users.loading,
  users: store.users.data,
  error: store.users.error
});

export default connect(mapStateToProps, {updateUsersAction, updateErrorAction}) (Users);