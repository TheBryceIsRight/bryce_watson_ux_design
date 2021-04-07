import React from 'react';
import { fade, createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import WorkIcon from '@material-ui/icons/Work';
import Link from 'next/link'
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Tooltip from '@material-ui/core/Tooltip';



const useStyles = makeStyles((theme: Theme) =>
createStyles({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}),
);

export default function PortfolioFooter() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'footer-menu-mobile';
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
        <IconButton aria-label="Personal email" color="inherit">
            <MailIcon />
        </IconButton>
        <Typography>Email</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="LinkedIn" color="inherit">
            <LinkedInIcon />
        </IconButton>
        <Typography>LinkedIn</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="My work" color="inherit">
            <WorkIcon />
        </IconButton>
        <Typography>Work</Typography>
      </MenuItem>
      <MenuItem >
        <IconButton
          aria-label="about me"
          aria-controls="primary-search-account-menu"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Typography>About me</Typography>
      </MenuItem>
    </Menu>
  );


  return (
    <div className={classes.root}>
      <Box style={{height:100}}/>
      <AppBar position="static">
        <Toolbar>
          <CopyrightIcon className={classes.menuButton} color="inherit" aria-label="copyright"/>
          <Typography variant="h6" className={classes.title}>
          {(new Date().getFullYear())} Designed and coded by Bryce Watson
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Tooltip title={"Email"}>
            <IconButton aria-label="My personal email" color="inherit">
                <MailIcon />
            </IconButton>
            </Tooltip>
            <Link href="https://www.linkedin.com/in/bryce-watson-gatech/" passHref>
            <Tooltip title={"LinkedIn"}>

            <IconButton aria-label="My LinkedIn Profile" color="inherit">
                <LinkedInIcon />
            </IconButton>
            </Tooltip>
            </Link>
            <Tooltip title={"My work"}>
            <IconButton aria-label="My work" color="inherit">
                <WorkIcon />
            </IconButton>
            </Tooltip>
            <Tooltip title={"About me"}>
            <IconButton
              edge="end"
              aria-label="about me"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </Tooltip>
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
    </div>
  );
}