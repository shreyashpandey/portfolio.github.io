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
// import emStyled from '@emotion/styled';

// constants
import { APP_TITLE, DRAWER_WIDTH } from "../../utils/constants";

// define css-in-js
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
        <IconButton size="small" color="inherit" style={{zIndex:999999}} onClick={callPopover} >
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
      </Toolbar>
    // </AppBar>
  );
};

export default Header;
