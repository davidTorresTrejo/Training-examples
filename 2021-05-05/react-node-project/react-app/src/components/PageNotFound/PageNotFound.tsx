import React from 'react';
import Paper from '@material-ui/core/Paper';

interface IProps {
    title: string
}

class PageNotFound extends React.Component<IProps>{
    render() {
        return (
            <Paper elevation={0}>
                <h1>{this.props.title}</h1>
                <p>The Current page is not available.....</p>
            </Paper>
        );
    }
}

export default PageNotFound;