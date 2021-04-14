import React from 'react';
import MasterLayout from '../layouts/MasterLayout';
import HomePage from '../containers/HomePage/HomePage';

class App extends React.Component{
  render(){
    return(
      <MasterLayout>
        <HomePage></HomePage>
      </MasterLayout>
    );
  }
}

export default App;
