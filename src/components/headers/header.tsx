// import clsx from "clsx";
// import React from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Tooltip,
//   createStyles,
//   makeStyles,
//   Theme,
// } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
// import Brightness7Icon from "@material-ui/icons/Brightness7";
// import Brightness3Icon from "@material-ui/icons/Brightness3";
// import UserIcon from "@material-ui/icons/AccountCircle";
// import { Popover } from "@mui/material";
// import { routes } from "../../config";
// import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import { Link, animateScroll as scroll } from "react-scroll";
// // import emStyled from '@emotion/styled';

// // constants
// import { APP_TITLE, DRAWER_WIDTH } from "../../utils/constants";

// // define css-in-js
// const buttonStyles=makeStyles((theme: Theme)=>
//   createStyles({
//     button:{
//       minWidth:"150px !important"
//     }
//   })
// );
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     // appBar: {
//     //   zIndex: theme.zIndex.drawer + 1,
//     //   transition: theme.transitions.create(["width", "margin"], {
//     //     easing: theme.transitions.easing.sharp,
//     //     duration: theme.transitions.duration.leavingScreen,
//     //   }),
//     // },
//     // appBarShift: {
//     //   marginLeft: DRAWER_WIDTH,
//     //   width: `calc(100% - ${DRAWER_WIDTH}px)`,
//     //   transition: theme.transitions.create(["width", "margin"], {
//     //     easing: theme.transitions.easing.sharp,
//     //     duration: theme.transitions.duration.enteringScreen,
//     //   }),
//     // },
//     toolbar: {
//       flex: 1,
//       display: "flex",
//       flexDirection: "row",
//       alignItems: "center",
//       position: "sticky",
//       top: "-10px",
//       backgroundColor:"#333"
//     },
//     title: {
//       flex: 1,
//       display: "flex",
//       flexDirection: "row",
//       alignItems: "center",
//     },
//     // menuButton: {
//     //   marginRight: 36,
//     // },
//     hide: {
//       display: "none",
//     },
//   })
// );

// // define interface to represent component props
// interface HeaderProps {
//   open: boolean;
//   // handleMenuOpen: () => void;
//   toggleTheme: () => void;
//   useDefaultTheme: boolean;
// }

// const Header = ({
//   open,
//   // handleMenuOpen,
//   toggleTheme,
//   useDefaultTheme,
// }: HeaderProps) => {
//   const [anchorEl, setAnchorEl] = React.useState<boolean>(false);
//   const classes = useStyles();
//   const buttonClasses=buttonStyles();
//   const callPopover = (): void => {
//     setAnchorEl(!anchorEl);
//   };
//   return (
//     // <AppBar
//     //   position="fixed"
//     //   elevation={0}
//     //   className={clsx(classes.appBar, {
//     //     [classes.appBarShift]: open,
//     //   })}
//     // >
//     <Toolbar className={classes.toolbar}>
//       <Grid container spacing={2}>
//         <Grid item sm={3}>
//           <div className={classes.title}>
//             {/* <IconButton
//             color="inherit"
//             aria-label="open menu"
//             onClick={handleMenuOpen}
//             edge="start"
//             className={clsx(classes.menuButton, {
//               [classes.hide]: open,
//             })}
//             size="small"
//           >
//             <MenuIcon />
//           </IconButton> */}
//             <Typography variant="h6" noWrap>
//               {APP_TITLE}
//             </Typography>
//           </div>
//         </Grid>
//         <Grid item sm={2}></Grid>
//         <Grid item sm={4}>
//           <Stack spacing={2} direction="row">
//             <Button variant="contained" className={buttonClasses.button}>
//               <Link
//                 activeClass="active"
//                 to="certificates"
//                 spy={true}
//                 smooth={true}
//                 // offset={-70}
//                 duration={500}
//               >
//                 Tech Stacks
//               </Link>
//             </Button>

//             <Button className={buttonClasses.button} variant="contained" style={{width:"200px",textAlign:"center"}}>Projects</Button>

//             <Button className={buttonClasses.button} variant="contained" style={{width:"250px",textAlign:"center"}}>Certifications</Button>

//             <Button className={buttonClasses.button} variant="contained">Contact Details</Button>
//           </Stack>
//         </Grid>
//         {/* <ButtonGroup>
//             <Button onClick={toggleTheme}>
//               {useDefaultTheme ? <Brightness7Icon /> : <Brightness3Icon />}
//             </Button>
//             <Button onClick={callPopover}>
//               <UserIcon />
//             </Button>
//           </ButtonGroup> */}
//         {/* <Grid item sm={2}></Grid> */}
//         {/* <Grid item sm={1}>
//           <IconButton onClick={toggleTheme}>
//             {useDefaultTheme ? (
//               <Tooltip title="Switch to dark mode" placement="bottom">
//                 <Brightness3Icon />
//               </Tooltip>
//             ) : (
//               <Tooltip title="Switch to light mode" placement="bottom">
//                 <Brightness7Icon />
//               </Tooltip>
//             )}
//           </IconButton>
//           <IconButton
//             size="small"
//             color="inherit"
//             style={{ zIndex: 999999 }}
//             onClick={callPopover}
//           >
//             <UserIcon />
//             {anchorEl ? (
//               <Popover
//                 open={anchorEl}
//                 anchorReference="anchorPosition"
//                 anchorPosition={{ top: 350, left: 580 }}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 transformOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//               >
//                 A popup
//               </Popover>
//             ) : (
//               <Popover
//                 open={anchorEl}
//                 anchorReference="anchorPosition"
//                 anchorPosition={{ top: 350, left: 580 }}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 transformOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//               >
//                 A popup
//               </Popover>
//             )}
//           </IconButton>
//         </Grid> */}
//       </Grid>
//     </Toolbar>
//     // </AppBar>
//   );
// };

// export default Header;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRef } from "react";
// import  Home from '../pages/Home';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Projects', 'Tech Stacks','Certifications', 'Contact Me'];



export default function header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const executeScrollPro = () => projectRef.current?.scrollIntoView()    
  // const executeScrollTech = () => techRef.current?.scrollIntoView()    

  // const executeScrollCert = () => certRef.current?.scrollIntoView()    

  // const executeScrollCont = () => contactRef.current?.scrollIntoView()    

  // const navItems = [{ name: 'Projects', dir: executeScrollPro }, { name: 'Tech Stacks', dir: executeScrollTech }, { name: 'Certifications', dir: executeScrollCert }, { name: 'Contact Me', dir: executeScrollCont }];
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const scroll = (item:any) => {
    let section;
    if(item=="Projects")
    section = document.querySelector( '#projects' );
    else if(item=="Tech Stacks")
    section = document.querySelector( '#tech-stacks' );
    else if(item=="Certifications")
    section = document.querySelector( '#certifications' );
    else if(item=="Contact Me")
    section = document.querySelector( '#contact-us' );
    console.log("Section ",section)
    section?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', background: 'linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)', height: '100%' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'white' }}>
        Portfolio
      </Typography>
      <Divider sx={{ background: 'linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)' }} />
      <List>
        {navItems.map((item) => (
          <ListItem onClick={()=>scroll(item)} key={item} disablePadding>
            <ListItemButton onClick={()=>scroll(item)}  sx={{ textAlign: 'center', color: 'white' }}>
              <ListItemText onClick={()=>scroll(item)} primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', background: 'linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: 'linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: '', sm: 'block' } }}
          >
            Portfolio Website
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button onClick={()=>scroll(item)} key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ background: 'linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)', height: '100%' }}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            background: 'linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)',
            height: '100%'
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
