/* Make the same that in Inbox.tsx */
import React from 'react';
import MyProgressBar from '../../UI/MyProgress';
import MyTable from '../../UI/MyTable';
import axios from '../../axios';

/* Redux */
import { connect } from 'react-redux';
import { updateUsersAction, updateUsersErrorAction} from '../../redux/actions/users';

interface IUserProps{
  loading: boolean;
  users: any;
  error: any;
  updateUsersAction: any;
  updateUsersErrorAction: any;
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
        /* this.setState({ loading: false, data: modUsers, error: null }); */
        this.props.updateUsersAction(modUsers);
      })
      /* .catch(error => this.setState({ loading: false, data: null, error: error })); */
      .catch(error => this.props.updateUsersErrorAction(error));
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
    const dataTSX = <MyProgressBar></MyProgressBar>
    return dataTSX;
  }

  renderSucces() {
    const dataTSX = <MyTable rows={this.props.users} searchHandler={this.props.searchHandler} ></MyTable>
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

export default connect(mapStateToProps, {updateUsersAction, updateUsersErrorAction}) (Users);

