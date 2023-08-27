import React, { ReactElement, FC } from "react";
import { AppBar, Toolbar, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Grid from "@material-ui/core/Grid"
import { LinkTree } from './links'
import "./footers.css"
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
interface Props {
    title: string
}
const ContactB: FC<any> = ({ title }): ReactElement => {
    function scroll() {
        let section;
          section = document.querySelector('#pimg');
        console.log("Section ", section)
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    return (
        <div id="contact-us">
            <AppBar position="static" style={{ background: 'linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)' }}>
                <Grid container spacing={3}>
                    {/* <Grid item xs={12} sm={6}>
                      
                    </Grid> */}
                    <Grid item xs={12} sm={6} sx={{ flexGrow: 1, paddingLeft: '25px' }}>
                        <br />
                        <p style={{ color: 'white' }}>✉️spandey548@gmail.com</p>
                        <p style={{ color: 'white' }}>📞+91-6386144662</p>
                        <p style={{ color: 'white' }}>📌Bengaluru, Karnataka</p>
                        <LinkTree />
                        
                    </Grid>
                    <Grid item sm={1} style={{ margin: '0px' }}>

                        <div className="vl" style={{ borderLeft: '5px solid black', height: '100%', width: '10px', margin: '0px' }}></div>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <div className="box">
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Toolbar style={{ fontSize: '22px', color: '#fff' }}>
                                        Contact Me
                                    </Toolbar>
                                </Grid>
                                <Grid item xs={12}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '12ch', color: '#fff', flexGrow: 1 },
                                        maxHeight: '300px', flexGrow: 1,display:'flex',flexDirection:'column',minWidth:'400px'
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    action={"https://submit-form.com/JKK1azA5"}
                                >
                                    <TextField id="name" label="Name" variant="standard" sx={{ background: "#fff", border: '2px solid #1976d2', maxHeight: '50px',minWidth:'200px'}} />
                                    <TextField id="email" type="email" label="Email" variant="standard" sx={{ background: "#fff", border: '2px solid #1976d2' , maxHeight: '50px',minWidth:'200px'}} />
                                    <TextField id="Subject" label="Subject" variant="standard" sx={{ background: "#fff", border: '2px solid #1976d2', maxHeight: '50px',minWidth:'200px' }} />
                                    {/* <TextField
                                id="description"
                                label="Decription"
                                multiline
                                rows={2}
                                defaultValue=""
                                sx={{background:"#fff",border:'2px solid #1976d2'}}
                            /> */}
                                    <Button type={"submit"} variant="contained" style={{ display: 'flex' }}>Submit</Button>
                                </Box>

                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid  item sm={1} xs={12} style={{display:"flex",flexDirection:'row',alignItems:'right',justifyContent:'right'}}>
                    <Button style={{ position: 'fixed',bottom: '1px', padding: '20px',background:'white',boxShadow:'0 0 10px #565656' }} onClick={scroll}><KeyboardDoubleArrowUpIcon /></Button>
                    </Grid>
                </Grid>
            </AppBar>
        </div>
    );
};
export default ContactB;  
