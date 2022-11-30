import clsx from "clsx";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import UserIcon from "@material-ui/icons/AccountCircle";
import { Popover } from "@mui/material";
import { routes } from "../../config";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Link, animateScroll as scroll } from "react-scroll";
// import emStyled from '@emotion/styled';

// constants
import { APP_TITLE, DRAWER_WIDTH } from "../../utils/constants";

// define css-in-js
const buttonStyles=makeStyles((theme: Theme)=>
  createStyles({
    button:{
      minWidth:"150px !important"
    }
  })
);
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // appBar: {
    //   zIndex: theme.zIndex.drawer + 1,
    //   transition: theme.transitions.create(["width", "margin"], {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    //   }),
    // },
    // appBarShift: {
    //   marginLeft: DRAWER_WIDTH,
    //   width: `calc(100% - ${DRAWER_WIDTH}px)`,
    //   transition: theme.transitions.create(["width", "margin"], {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.enteringScreen,
    //   }),
    // },
    toolbar: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      position: "sticky",
      top: "-10px",
      backgroundColor:"#333"
    },
    title: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    // menuButton: {
    //   marginRight: 36,
    // },
    hide: {
      display: "none",
    },
  })
);

// define interface to represent component props
interface HeaderProps {
  open: boolean;
  // handleMenuOpen: () => void;
  toggleTheme: () => void;
  useDefaultTheme: boolean;
}

const Header = ({
  open,
  // handleMenuOpen,
  toggleTheme,
  useDefaultTheme,
}: HeaderProps) => {
  const [anchorEl, setAnchorEl] = React.useState<boolean>(false);
  const classes = useStyles();
  const buttonClasses=buttonStyles();
  const callPopover = (): void => {
    setAnchorEl(!anchorEl);
  };
  return (
    // <AppBar
    //   position="fixed"
    //   elevation={0}
    //   className={clsx(classes.appBar, {
    //     [classes.appBarShift]: open,
    //   })}
    // >
    <Toolbar className={classes.toolbar}>
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <div className={classes.title}>
            {/* <IconButton
            color="inherit"
            aria-label="open menu"
            onClick={handleMenuOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
            size="small"
          >
            <MenuIcon />
          </IconButton> */}
            <Typography variant="h6" noWrap>
              {APP_TITLE}
            </Typography>
          </div>
        </Grid>
        <Grid item sm={2}></Grid>
        <Grid item sm={4}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" className={buttonClasses.button}>
              <Link
                activeClass="active"
                to="certificates"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
              >
                Tech Stacks
              </Link>
            </Button>

            <Button className={buttonClasses.button} variant="contained" style={{width:"200px",textAlign:"center"}}>Projects</Button>

            <Button className={buttonClasses.button} variant="contained" style={{width:"250px",textAlign:"center"}}>Certifications</Button>

            <Button className={buttonClasses.button} variant="contained">Contact Details</Button>
          </Stack>
        </Grid>
        {/* <ButtonGroup>
            <Button onClick={toggleTheme}>
              {useDefaultTheme ? <Brightness7Icon /> : <Brightness3Icon />}
            </Button>
            <Button onClick={callPopover}>
              <UserIcon />
            </Button>
          </ButtonGroup> */}
        {/* <Grid item sm={2}></Grid> */}
        {/* <Grid item sm={1}>
          <IconButton onClick={toggleTheme}>
            {useDefaultTheme ? (
              <Tooltip title="Switch to dark mode" placement="bottom">
                <Brightness3Icon />
              </Tooltip>
            ) : (
              <Tooltip title="Switch to light mode" placement="bottom">
                <Brightness7Icon />
              </Tooltip>
            )}
          </IconButton>
          <IconButton
            size="small"
            color="inherit"
            style={{ zIndex: 999999 }}
            onClick={callPopover}
          >
            <UserIcon />
            {anchorEl ? (
              <Popover
                open={anchorEl}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 350, left: 580 }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                A popup
              </Popover>
            ) : (
              <Popover
                open={anchorEl}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 350, left: 580 }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                A popup
              </Popover>
            )}
          </IconButton>
        </Grid> */}
      </Grid>
    </Toolbar>
    // </AppBar>
  );
};

export default Header;
