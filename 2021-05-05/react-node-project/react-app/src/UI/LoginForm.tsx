import React, {useState} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function LoginForm( props: any ) {
  const classes = useStyles();

  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const emailChangeHandler = (event: any) => {
    setEmail(event.target.value);
  }

  const passwordChangeHandler = (event: any) => {
    setPassword(event.target.value);
  }

  const loginClickHandler = ( event: any) => {
    /* props.loginHandler(email, password); */
    console.log(`email: ${email} , password: ${password}`);
  }


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input placeholder="Email" inputProps={{ 'aria-label': 'description' }} onChange={emailChangeHandler} />
      <Input placeholder="Password" inputProps={{ 'aria-label': 'description'}} onChange={passwordChangeHandler} />
      <Button variant="contained" color="primary" onClick={loginClickHandler}>Login</Button>
    </form>
  );
}
