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
const navItems = ['Projects', 'Tech Stacks', 'Certifications', 'Contact Me'];



export default function MenuB(props: Props) {
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
  const scroll = (item: any) => {
    let section;
    if (item == "Projects")
      section = document.querySelector('#projects');
    else if (item == "Tech Stacks")
      section = document.querySelector('#tech-stacks');
    else if (item == "Certifications")
      section = document.querySelector('#certifications');
    else if (item == "Contact Me")
      section = document.querySelector('#contact-us');
    console.log("Section ", section)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const download = () => {

  }
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', background: 'linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)', height: '100%', maxWidth: '100%' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'white' }}>
        Shreyash Pandey
      </Typography>
      <Divider sx={{ background: 'linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)' }} />
      <List>

        {navItems.map((item) => (
          <ListItem onClick={() => scroll(item)} key={item} disablePadding>
            <ListItemButton onClick={() => scroll(item)} sx={{ textAlign: 'center', color: 'white' }}>
              <ListItemText onClick={() => scroll(item)} primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem key={"downloadCV"} disablePadding>
          <ListItemButton onClick={() => download()} sx={{ textAlign: 'center', color: 'white',alignItems:'center',display:'flex',justifyContent:'center' }}>

            <a href="/Shreyash_Pandey.docx" download="ShreyashPandey.docx" style={{color:'#fff'}}>Download CV</a>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', background: 'linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)', flexWrap: 'wrap' }}>
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
            sx={{ flexGrow: 1, display: { xs: '', sm: 'flex' } }}
          >
            Shreyash Pandey
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

            {navItems.map((item) => (
              <Button onClick={() => scroll(item)} key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
            <Button key={"downloadCV"} sx={{ color: '#fff' }}><a href="/Shreyash_Pandey.docx" download="ShreyashPandey.docx" style={{ color: '#fff' }}>{"Download CV"}</a></Button>
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
