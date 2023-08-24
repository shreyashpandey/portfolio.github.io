import React, { ReactElement, FC } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid"
import {LinkTree} from './links'
import "./footers.css"
interface Props {
    title: string
}
const Footer: FC<any> = ({ title }): ReactElement => {
    return (
        <div id="contact-us">
            <AppBar position="static" style={{background:'linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)'}}>
                <Grid container spacing={3}>
                    {/* <Grid item xs={12} sm={6}>
                      
                    </Grid> */}
                    <Grid item xs={12} sm={6} sx={{flexGrow:1,paddingLeft:'25px'}}>
                        <br/>
                        <p style={{color:'white'}}>✉️spandey548@gmail.com</p>
                        <p style={{color:'white'}}>📞+91-6386144662</p>
                        <p style={{color:'white'}}>📌Bengaluru, Karnataka</p>
                        <LinkTree/>
                    </Grid>
                    <Grid item sm={1} style={{margin:'0px'}}>

                    <div className="vl" style={{borderLeft:'5px solid black',height:'100%',width:'10px',margin:'0px'}}></div>
                    </Grid>
                    <Grid item xs={12} sm={4} >
                        <div className="box">
                            <Grid container spacing={2}>
                        <Toolbar style={{fontSize:'22px',color:'#fff'}}>
                            Contact Me
                        </Toolbar>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '12ch', color: '#fff',flexGrow:1 },
                                maxHeight:'300px',flexGrow:1
                            }}
                            noValidate
                            autoComplete="off"
                            action={"https://submit-form.com/JKK1azA5"}
                        >
                            <TextField id="name" label="Name" variant="standard" sx={{background:"#fff",border:'2px solid #1976d2',maxHeight:'50px'}}/>
                            <TextField id="email" type="email" label="Email" variant="standard" sx={{background:"#fff",border:'2px solid #1976d2'}}/>
                            <TextField id="Subject" label="Subject" variant="standard" sx={{background:"#fff",border:'2px solid #1976d2'}}/>
                            {/* <TextField
                                id="description"
                                label="Decription"
                                multiline
                                rows={2}
                                defaultValue=""
                                sx={{background:"#fff",border:'2px solid #1976d2'}}
                            /> */}
                            <Button type={"submit"} variant="contained" style={{display:'flex'}}>Submit</Button>
                        </Box>
                        </Grid>
                        </div>
                    </Grid>
                </Grid>
            </AppBar>
        </div>
    );
};
export default Footer;  
