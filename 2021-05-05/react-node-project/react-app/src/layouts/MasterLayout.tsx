import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '../UI/AppBar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const MatserLayout = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} direction="column" justify="flex-end" alignItems="stretch">

        <Grid item xs={12}>
          <AppBar></AppBar>
        </Grid>

        <Grid item xs={12}>
          {props.children}          {/* Central Area */}
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paper}>Copyright 2021</Paper>         {/* Footer Area */}
        </Grid>

      </Grid>
    </div>
  );
}


export default MatserLayout;

