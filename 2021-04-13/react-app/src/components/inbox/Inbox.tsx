import React from 'react';
import { Theme, withStyles, StyleRules} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = (theme: Theme): StyleRules => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(150),
      height: theme.spacing(16),
    },
  },
});

interface IProps{
  classes: any;
}

class Inbox extends React.Component<IProps> {
  
  render() {
    return (
      <div className = {this.props.classes.root}>
        <Paper elevation = {1}>
          <Typography variant = "subtitle2" gutterBottom>
            Inbox Component 
          </Typography>

          <Typography variant = "body1" gutterBottom>
            Write something........
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles)(Inbox);



