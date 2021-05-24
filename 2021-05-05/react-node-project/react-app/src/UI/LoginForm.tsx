import  { useState } from 'react';
import clsx from 'clsx';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      width: theme.spacing(50),
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  }),
);

interface IProps{
  loginHandler: any;
  loading: boolean;
  failure: boolean;
}

export default function LoginForm(props: IProps) {
  const classes = useStyles();

  /* Material UI */
  const loading = props.loading;
  const failure = props.failure;
  /* const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState(false);
  const timer = useRef<number>(); */

  const buttonClassname = clsx({
    [classes.buttonSuccess]: failure,
  });

  /* useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setFailure(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setFailure(true);
        setLoading(false);
      }, 2000);
    }
  }; */


  /* Data */
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const emailChangeHandler = (event: any) => {
    setEmail(event.target.value);
  }

  const passwordChangeHandler = (event: any) => {
    setPassword(event.target.value);
  }

  const loginClickHandler = (event: any) => {
    props.loginHandler(email, password);
    /* handleButtonClick(); */
    /* console.log(`email: ${email} , password: ${password}`); */
  }


  return (
    <Paper className={classes.root} >
      <form noValidate autoComplete="off">
        <Input placeholder="Email" inputProps={{ 'aria-label': 'description' }} onChange={emailChangeHandler}/> <br/><br/>
        <Input placeholder="Password" inputProps={{ 'aria-label': 'description' }} onChange={passwordChangeHandler}/> <br/><br/>
        {/* <Button variant="contained" color="primary" onClick={loginClickHandler}>Login</Button> */}
        <div className={classes.wrapper}>
          <Button fullWidth variant="contained" color="primary" className={buttonClassname} disabled={loading} onClick={loginClickHandler}>
            Login
          </Button>
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
        {
          props.failure ? 
            <Typography variant="subtitle1" gutterBottom>{props.failure}</Typography>
          :
            <p></p>
        }
      </form>
    </Paper>
  );
}
