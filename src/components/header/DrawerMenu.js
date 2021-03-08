import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import MenuIcon from '@material-ui/icons/Menu';
import Category from '../others/Category';  

import {useStyles} from './../theme/MaterialTheme'

const DrawerMenu = () => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };



      const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <div className="header-category">
            <Category />
            </div>
          </List>

        </div>
      );

    return (
       
<div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}> <MenuIcon /></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}

          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
    )
}

export default DrawerMenu
