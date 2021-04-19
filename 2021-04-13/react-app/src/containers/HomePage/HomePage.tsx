import React, { Component } from 'react';
import LayoutHome from '../../layouts/LayoutHome'
import CardComponent from '../../components/CardComponent'


/* HomePage Component */
class HomePage extends Component{

  render(){
    return(
      /* Use LayoutHome */
      <LayoutHome>
        {/* 
          <p>Home Component!</p>
          Call My component
        */}
        {/* <CardComponent title = "Send Component" content = "Component Area" titleButton = "View"></CardComponent> */}
      </LayoutHome>
    );
  }
}

export default HomePage;

/* Add Route  */