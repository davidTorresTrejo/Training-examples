/* React Components */

// Functional Components
const Card = (props) => {
    // Always return JSX
    return(
        <div class = "box">
            <h1>{props.name}</h1>
            <p>Price: {props.price}</p>
        </div>
    )
}

// Class Components
class Cart extends React.Component{
    // Class needs overwrite reder method
    render(){
        return(
            <div class = "box">
                <h1>{this.props.name}</h1>
                <p>Price: {this.props.price}</p>
                <p>{this.props.extra}</p>
            </div>
        );
    }
}

// Reusage Components
let app = (
    <div>
        <Cart name = "Orange" price = "200" extra = "This is an Orange"></Cart>
        <Card name = "Apple" price = "100"></Card>
    </div>
);

// For Draw in the browser  
//ReactDOM.render(app, document.getElementById('root'));

// Assignation

/* Container Card Component */
class MyCard extends React.Component{
    render(){
        return(
            <div class = "my-card">
                <h3>{this.props.title}</h3>
                <p class = "my-text">{this.props.textCard}</p>
                <PrintComponent code = "Hello World!"></PrintComponent>
                <Button text = "Try it ..."></Button>
            </div>
        );
    }
}

/* Container Text Code Component */
class PrintComponent extends React.Component{
    render(){
        return(
            <div class = "text-container">
                <p class = "text-code">
                    <span class = "color-code">print</span> 
                    <span class = "color-parenthesis">(</span>
                    <span class = "color-quotes"> " </span>  
                    {this.props.code} 
                    <span> " </span>
                    <span class = "color-parenthesis"> )</span>
                </p>
            </div>
        );
    }
}

/* Button Component */
class Button extends React.Component{
    render(){
        return(
            <button class = "button-custom"><span class = "text-button">{this.props.text}</span></button>
        );
    }
}

/* Reusage Card Component */
let newCard = (
    <MyCard textCard = "Use print() function to show something in Python console. " title = "print() Example">
    </MyCard>
);

let newCard2 = (
    <MyCard textCard = "Use print() function to show something in Python console. " title = "print() Example">      
    </MyCard>
);
ReactDOM.render(newCard, document.getElementById('root'));
ReactDOM.render(newCard2, document.getElementById('root2'));
