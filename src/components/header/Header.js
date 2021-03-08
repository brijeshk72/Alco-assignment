import React, {useEffect} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MailIcon from '@material-ui/icons/Mail';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

// Custom Components
import GlobalSearch from './../helper/GlobalSearch';


import {useStyles} from './../theme/MaterialTheme'
import DrawerMenu from './DrawerMenu';

import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';

import {fetchCart} from './../../actions/cart'

const Header = () => {
  const {FETCHCART} = useSelector(state=>state);
  const dispatch=useDispatch();

  useEffect(() => {
      dispatch(fetchCart())
    }, [dispatch]);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={FETCHCART && FETCHCART.length>0 ? FETCHCART[0].products.length : 0} color="secondary">
          <Link to="/cart">
            {/* <MailIcon /> */}
            <img src="/assets/image/icons/cart.svg" alt=""/>
            </Link>
          </Badge>
        </IconButton>
      </MenuItem>
    </Menu>
  );


    return (
        <div>



           <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >


            <DrawerMenu /> 
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
          <Link to="/">
          ALCO
          </Link>
           
          </Typography>
        
            <GlobalSearch />


          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={FETCHCART && FETCHCART.length>0 ? FETCHCART[0].products.length : 0} color="secondary">
              <Link to="/cart">
                {/* <MailIcon /> */}
                <img src="/assets/image/icons/cart.svg" alt=""/>
                </Link>
              </Badge>
            </IconButton>
            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>  
        </div>
    )
}

export default Header