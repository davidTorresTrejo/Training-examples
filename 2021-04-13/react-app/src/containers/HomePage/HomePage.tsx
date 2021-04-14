import React, { Component } from 'react';
import Layout from '../../layouts/Layout'

class HomePage extends React.Component{
  render(){
    const dataJSX = 'Welcome!';
    return(
      <Layout title = "HomePage" data = {dataJSX}></Layout>
    );
  }
}

export default HomePage;