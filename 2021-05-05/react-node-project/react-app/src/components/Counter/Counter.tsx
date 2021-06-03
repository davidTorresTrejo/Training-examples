import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter} from '../../redux/actions/counter';


/* CReate an interface */
interface IProps{
    counter: number;
    incrementCounter: any;
    decrementCounter: any;
}

class Counter extends React.Component<IProps>{


    /* Handle onclick events of Buttons */
    onIncrementHandler = () => {
        this.props.incrementCounter(1);
    }

    onDecrementHandler = () => {
        this.props.decrementCounter(1);
    }

    render() {
        return (
            <div>
                <h3>Counter Value: {this.props.counter} </h3> 
                <Button variant="contained" onClick={this.onIncrementHandler}>INCREMENT</Button>
                <Button variant="contained" onClick={this.onDecrementHandler}>DECREMENT</Button>
            </div>
        );
    }
}

/* Subscribe to central store */
const mapStateToProps = (store: any) => ({
    counter: store.counterKey.counter
});

export default connect(mapStateToProps, { incrementCounter, decrementCounter }) (Counter);