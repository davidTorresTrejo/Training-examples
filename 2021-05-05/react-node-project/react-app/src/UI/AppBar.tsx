import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { RouteComponentProps, } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { authLogoutAction } from '../redux/actions/login';


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

interface IProps extends RouteComponentProps{
  isAuthenticated: boolean;
  authLogoutAction: any;
}

/* props: RouteComponentProps */
const Bar = ( props:  IProps ) => {
  const classes = useStyles();


  /* Handling onClick proparty of Buttons Home, Admin & Login */
  const appButtomHandler = () => {
    props.history.push({ pathname: '/' });
  }

  const homeButtomHandler = () => {
    props.history.push({ pathname: '/' });
  }

  const adminButtomHandler = () => {
    props.history.push({ pathname: '/admin' });
  }

  const loginButtomHandler = () => {
    props.history.push({ pathname: '/login' });
  }

  /* Handling Auth Action for Logout */
  const logoutButtomHandler = () => {
    props.authLogoutAction();
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit" onClick={appButtomHandler}>MyAplication</Button>
          </Typography>
          
          <Button color="inherit" onClick={homeButtomHandler}>Home</Button>
          {/* If user is Authenticated show Admin button  */}
          { props.isAuthenticated ? <Button color="inherit" onClick={adminButtomHandler}>Admin</Button> : <p></p> }

          {/* If user is Authenticated show Logout else show Login */}
          { props.isAuthenticated ? <Button color="inherit" onClick={logoutButtomHandler}>Logout</Button>
            : <Button color="inherit" onClick={loginButtomHandler}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

/* Subscribe to central store */
const mapStateToProps = ( store: any ) => ({
  isAuthenticated: store.auth.isAuthenticated
});


export default connect(mapStateToProps, { authLogoutAction }) (withRouter(Bar));
