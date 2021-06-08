/* Create Context */
const UserContext = React.createContext();
const ThemeContext = React.createContext();


class App extends React.Component{
    render(){

        const user = {name: `Steve Jobs`, age: 25};

        return(
            <UserContext.Provider value={user}>
                <div>
                    <h3>Home Component</h3>
                    <Child></Child>
                    <Child1></Child1>
                </div>
            </UserContext.Provider>
        );
    }
}

/* Child (Class Component) */
class Child extends React.Component{
    render(){
        return(
            <UserContext.Consumer>
                {user => {
                    return(
                        <div>
                            <h4>Name in Child: {user.name}</h4>
                            <h4>Name in Child: {user.age}</h4>
                        </div>
                    );
                }}
            </UserContext.Consumer>
        );
    }
}

/* Child1 (Functional Component) */
const Child1 = props => {
    const user = React.useContext(UserContext);

    return(
        <div>
            <h4>Name in Child1: {user.name}</h4>
            <h4>Age in Child1: {user.age}</h4>
        </div>
    );
};

ReactDOM.render(<App></App>, document.getElementById('root'));
