import React, { Component } from 'react';
import LayoutHome from '../../layouts/LayoutHome'

/* HomePage Component */
class HomePage extends Component{
  render(){
    return(
      /* Use LayoutHome */
      <LayoutHome>
        <p>Home Component!</p>
      </LayoutHome>
    );
  }
}

export default HomePage;