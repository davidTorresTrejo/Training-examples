import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div className="ui equal width center aligned padded grid">
          <div className="row">
            <div className="olive column">Olive</div>
            <div className="black column">Black</div>
          </div>
        <div className="row">
          <div className="column">Custom Row</div>
        </div>
        <div className="row">
          <div className="black column">Black</div>
          <div className="olive column">Olive</div>
        </div>
      </div>
    );
  }
}

export default App;
