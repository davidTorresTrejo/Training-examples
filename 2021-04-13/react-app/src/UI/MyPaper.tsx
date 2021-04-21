import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        /* width: theme.spacing(16), */
        height: theme.spacing(16),
      },
    },
  }),
);

const MyPaper = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation = {1}>
        <Typography variant = "subtitle2" gutterBottom>
            {props.title}
        </Typography>
        <Typography variant = "body1" gutterBottom>
            {props.body}
        </Typography>
      </Paper>
    </div>
  );
}

export default MyPaper;

/* 
    CReate paper from ui and use in inboxComponent
    Clean inboxComponent
*/