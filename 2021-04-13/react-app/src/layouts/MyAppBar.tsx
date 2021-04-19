/* Add Simple Nav Bar */
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {RouteComponentProps,} from 'react-router-dom';
import {withRouter} from 'react-router';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

/* props: RouteComponentProps */
const MyAppBar = (props: RouteComponentProps) => {
  const classes = useStyles();


  /* Handling onClick proparty of Buttons Home & Admin */
  const homeButtomHandler = () =>{
    props.history.push({pathname: '/'});
  }

  const adminButtomHandler = () =>{
    props.history.push({pathname: '/admin'});
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My Aplication
          </Typography>
          {/* Routes to Home and Admin Pages in Buttons */}
          <Button color="inherit" onClick = {homeButtomHandler}>Home</Button>
          <Button color="inherit" onClick = {adminButtomHandler}>Admin</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(MyAppBar);

/*  Import withRouter export withRoute(MyAppBar) 
    onClick
*/
