import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      //padding: theme.spacing(0, 3, 3, 3),
    },
  }),
);

interface Props {
  children: any;
}

const LayoutLogin = (props: Props) => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      {<main className={classes.content}>
        <Typography paragraph>
          {props.children}
        </Typography>
      </main>}
    </div>
  );
}


export default LayoutLogin;



