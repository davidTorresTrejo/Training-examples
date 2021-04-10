/* State in Functional / Class Component */

// Functional Component whit state

const Form = () =>{
    //Hooks
    const [title, setTitle] = React.useState('');
    const [desc, setDesc] = React.useState('');

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const descChangeHandler = (event) => {
        setDesc(event.target.value);
    }

    const submitButtonHandler = (event) => {
        console.log(`Title: ${title}, Description: ${desc}`);
    }

    return(
        <div className = "box">
            <label>Blog Title</label><br/>
            <input type = "text" onChange = {titleChangeHandler}></input><br/>
            <label>Blog Description</label><br/>
            <textarea onChange = {descChangeHandler}></textarea><br/>
            <button onClick = {submitButtonHandler}>Add Blog</button>
        </div>
    );
}

// Class Component whit state

class FormClass extends React.Component{

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
        console.log(`Title: ${this.state.title}, Description: ${this.state.desc}`);
    }




    render(){
        return(
            <div className = "box">
                <label>Blog Title</label><br/>
                <input type = "text" onChange = {this.titleChangeHandler}></input><br/>
                <label>Blog Description</label><br/>
                <textarea onChange = {this.descChangeHandler}></textarea><br/>
                <button onClick = {this.submitButtonHandler}>Add Blog</button>
            </div>
        );
    }
}


/* Drawing */

class App extends React.Component{
    render(){
        return(
            <div className = "App">
                {/* <Form></Form> */}
                <FormClass></FormClass>
            </div>
        );
    }
}

ReactDOM.render(<App></App>,document.getElementById('root'));