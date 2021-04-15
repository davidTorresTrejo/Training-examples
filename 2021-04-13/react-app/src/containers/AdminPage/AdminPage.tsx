import React from 'react';
import LayoutAdmin from '../../layouts/LayoutAdmin'

/* AdminPage Component */
class AdminPage extends React.Component{
  render(){
    return(
      /* Use LayoutAdmin */
      <LayoutAdmin>
        <p>Admin Component!</p>
      </LayoutAdmin>
    );
  }
}

export default AdminPage;