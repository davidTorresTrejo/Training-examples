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

  searchKeypPressHandler = (event: any) => {
    console.log(event.target.value);
    if (event.key === `Enter`) {
      
      const getOption = event.target.value;

      axios.get(`/api/users?name=${getOption}`)
        .then(response => {
          // modify data here (Custom Data)
          const users: any[] = response.data;
          const modUsers = users.map((user: any) => {
            return { User: user.name, Email: user.email, City: user.address.city, Phone: user.phone, Company: user.company.name };
          });
          this.setState({ loading: false, data: modUsers, error: null });

        })
        .catch(error => this.setState({ loading: false, data: null, error: error }));
    }
}

componentDidMount() {
  axios.get(`/api/users`)
    .then(response => {
      // modify data here (Custom Data)
      const users: any[] = response.data;
      const modUsers = users.map((user: any) => {
        return { User: user.name, Email: user.email, City: user.address.city, Phone: user.phone, Company: user.company.name };
      });
      this.setState({ loading: false, data: modUsers, error: null });

    })
    .catch(error => this.setState({ loading: false, data: null, error: error }));
  // Fetch data from backend
  // const res = fetch('url')
  // then ( data => console.log(data) )
  //.catch(error => concole.log(error))
}

render() { return <UsersView {...this.state} searchHandler={this.searchKeypPressHandler}></UsersView> };
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
    const dataTSX = <MyTable rows={this.props.data} ></MyTable>
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

