class App extends React.Component{

    state = { count: 0, object1: {title: `Child title`} };

    increment = () => {
        this.setState({ count: this.state.count+1, object1: {title: `Child Title`}});
    }
    
    render(){
        console.log(`App Render`);
        return(
            <div>
                <h3>Home Component : {this.state.count}</h3>
                <button onClick={this.increment}>Increment</button>
                <Child options={this.state.object1}></Child>
            </div>
        );
    }
}


class Child extends React.PureComponent{

    state = { count: 0 };

    decrement = () => {
        this.setState({ count: this.state.count-1 });
    }

    shouldComponentUpdate(nextProps, nextState){
        if( this.props.options.title !== nextProps.options.title){
            return true;
        }

        return false;
    }

    render(){
        console.log(`Child Render`);
        return(
            <div>
                <h4>{this.props.options.title}</h4>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }

}


ReactDOM.render(<App></App>, document.getElementById('root'));