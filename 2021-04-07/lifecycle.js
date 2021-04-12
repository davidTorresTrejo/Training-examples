/* Lifecycle */

// Class Component whit Lifecycle
class Product extends React.Component{
    constructor(){
        super();
        console.log('constructor....');
    }

    state = {
        title: '',
        desc: ''
    }

    titleChangeHandler = (event) => {
        this.setState({...this.state, title: event.target.value});
    }

    descChangeHandler = (event) => {
        this.setState({...this.state, desc: event.target.value});
    }

    submitButtonHandler = (event) => {
        console.log(`Title : ${this.state.title}, Description: ${this.state.desc}`);
    }

    render(){
        console.log('render....');   
        return(
            <div className = "box">
                <label>Blog Title</label><br/>
                <input type = "text" onChange = {this.titleChangeHandler}></input><br/>
                <label>Blog Description </label><br/>
                <textarea onChange = {this.descChangeHandler}></textarea><br/>
                <button onClick = {this.submitButtonHandler}>Add Blog</button><br/>
            </div>
        );
    }

    /* Lifecycle */
    componentDidMount(){
        console.log('componentDidMount');
    }

    componentUpdate(){
        console.log('componentUpdate');
    }

    componentWillMount(){
        console.log('componentWillMount');
    }
}

// Functional Elements whit Lifecycle 

const View = (props) => {

    React.useEffect(() => {
        console.log('Runs Everytime...');
    });

    React.useEffect(() => {
        console.log('Runs when component is mounted...');
    }, []);

    React.useEffect(() => {
        console.log('Runs when  prop/ state is updated...');
    }, [props.tile]);

    React.useEffect(() => {
        console.log('Runs when  prop/ state is updated...');
    }, [props.desc]);

    React.useEffect(() => {
        return () => console.log('Runs when component is unmounted');
    });

    return(
        <div className = "box"> 
            <h1>Apple</h1>
            <p>Price: 100</p>
        </div>

    );
}

/* Main Class*/
class App extends React.Component{
    render(){
        return(
            <div className = "App">
                <Product></Product>
                {/* <View></View> */}
            </div>
        );
    }
}

// Drawing
ReactDOM.render(<App></App>, document.getElementById('root'));
