/* 
    HOC - Higher Order Components 
    HOC are functions wich takes a Componet as an argument & returns an enhanced Component
*/

// HOC
const withProps = (Component) => {
    
    return class extends React.Component{
        render() { return <Component user={{name:'Steve Jobs', age: 25}}></Component> }
    }
}

const withPropsFromBackend = (Component) => {

    return class extends React.Component{
        
        state = {user: null, error: null };

        componentDidMount(){
            axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then( response => {
                    this.setState({user: response.data[0], error: null});
                })
                .catch( error => {
                    this.setState({user: null, error: error});
                })
        }
        
        render () { return <Component {...this.state}></Component>}

    }
}

// Our Component

class MyComponent extends React.Component{
    render(){

        const { user, error } = this.props;

        return(
            <div>
                <h3>My Component with enhanced....</h3>
                <h3>{user?.name}</h3>
                <h3>{user?.email}</h3>
                <h3>{error?.message}</h3>
            </div>
        );
    }
}

const EnhancedMyComponent = withPropsFromBackend(MyComponent);

ReactDOM.render(<EnhancedMyComponent></EnhancedMyComponent>, document.getElementById('root'));