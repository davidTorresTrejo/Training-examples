import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import {RouteComponentProps,} from 'react-router-dom';
import {withRouter} from 'react-router';
/* use with router 
  routecomponentprops and extends in the interface
*/

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      position: 'static',
      height: 400
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(0, 3, 3, 3),
    },
  }),
);

interface Props extends RouteComponentProps{
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  items: string[];
  children: any;
  window?: () => Window;
}

const LayoutArea = (props: Props) => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  /* States */
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (event: any, index: number) => {
    setSelectedIndex(index);
    console.log(index);
    /* 
      Implement switch-case statement to choose path 
      if statement is to fix the path
    */

    switch(index){
      case 0:
        if(props.history.location.pathname === '/' || props.history.location.pathname === '/home/starred'){
          props.history.push({pathname: '/home/inbox'});
        }else{
          props.history.push({pathname: '/admin/user'});
        }
        return;

      case 1:
        if(props.history.location.pathname === '/' || props.history.location.pathname === '/home/inbox'){
          props.history.push({pathname: '/home/starred'});
        }else{
          props.history.push({pathname: '/admin/config'});
        }
        return;
    }
    
  }

  const drawer = (
    /* Content Layout Home */
    /* Add list item dinamic, search components list in material ui */

    <div>
      <Divider />
      <List>
        {props.items.map((text, index) => (
          <ListItem 
            button key={text}
            selected = {selectedIndex === index}
            onClick = {(event) => handleListItemClick(event, index)}
          >
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* Check This  */}
      {<main className={classes.content}>
        {/* <div className={classes.toolbar} /> */}
        <Typography paragraph>
          {props.children}
        </Typography>
      </main>}
    </div>
  );
}


export default withRouter(LayoutArea);