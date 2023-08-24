import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import myImg from "../../images/my_img.jpg";
import jsImg from "../../images/js_img.png";
import tsImg from "../../images/ts_img.png";
import htmlImg from "../../images/html_img.png";
import cssImg from "../../images/css_img.png";
import reactImg from "../../images/react_img.png";
import nodeImg from "../../images/node_img.png";
import dataScience from "../../images/DataScience_DC.png";
import googleCloud from "../../images/GoogleCloud.png";
import problemSolving from "../../images/ProblemSolving.png";
import javascript from "../../images/JS_HR.png";
import hotpot from "../../images/Hotpot.png";
import Careers from "../../images/Carrers.png";
import DiscountCalculator from "../../images/DiscountCalculator.png";
import blockly from "../../images/blockly.png";
import { TextField } from "@mui/material";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import StarsIcon from "@mui/icons-material/Stars";
import Zoom from "@mui/material/Zoom";
import { frontendProjectsObj, backendProjectsObj } from "../descriptions/description";
import { useRef } from "react";
import "./Home.css"
// import { projectRef,techRef,certRef,contactRef } from "../headers/header";


// import * as THREE from 'three';
const buttonStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      minWidth: 200,
    },
  })
);
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);
const cardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    // expand: {
    //   transform: "rotate(0deg)",
    //   marginLeft: "auto",
    //   transition: theme.transitions.create("transform", {
    //     duration: theme.transitions.duration.shortest,
    //   }),
    // },
    // expandOpen: {
    //   transform: "rotate(180deg)",
    // },
    avatar: {
      backgroundColor: red[500],
    },
    card: {
      background:
        "linear-gradient(to bottom right purple pink) !important",
      height: "220px !important",
    },
  })
);
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Amarante"].join(","),
  },
});
const newTheme = createMuiTheme({
  typography: {
    fontFamily: ["Bangers"].join(","),
  },
});
// const Cube = () => {
//   const cube = useRef<three.Mesh>();

//   useFrame(() => {
//     cube.current!.rotation.x += 0.01;
//     cube.current!.rotation.y += 0.01;
//   });

//   return (
//     <mesh ref={cube}>
//       <boxBufferGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color="#0391BA" />
//     </mesh>
//   );
// };

// const Scene = () => {
//   return (
//     <>
//       <gridHelper />
//       <axesHelper />
//       <pointLight intensity={1.0} position={[5, 3, 5]} />
//       <Cube />
//     </>
//   );
// };

export default function Home() {
  const projectRef = useRef(null);
  const techRef = useRef(null);
  const certRef = useRef(null);
  const contactRef = useRef(null);
  const classes = useStyles();
  const cardClasses = cardStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [starColor, setStarColor] = React.useState("white");
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const displayLinkModal = (): void => {
    setStarColor("yellow");
    alert(
      "This is a link to my github\nhttps://github.com/shreyashpandey/Portfolio-Redeemer/tree/dev"
    );
  };
  // const ref = useRef<Canvas>(null!);
  // window.onscoll
  function mouseOverModal(e: React.MouseEvent<HTMLDivElement> | any) {
    setTimeout(() => {
      console.log("Mouse Event Id ", e)
    }, 1000)
    // Modal Display Comment
  }
  function AddMoreContent() {
    // $.post('getMoreContent.php', function(data) {
    //      //Assuming the returned data is pure HTML
    //      $(data).insertBefore($('#placeHolder'));
    // });
  }
  return (
    <>
      {/* <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Canvas
          concurrent
          camera={{
            near: 0.1,
            far: 1000,
            zoom: 1,
          }}
          onCreated={({ gl }) => {
            gl.setClearColor("#252934");
          }}
        >
          <Stats />
          <OrbitControls />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div> */}
      <div className={classes.root}>

        <Grid container spacing={3}>
          <Grid item md={5} sm={5} xs={12} >
            <Paper id={"pimg"} className={classes.paper} style={{ background: 'transparent',boxShadow:'0px 0px 0px transparent' }}>
              <img
                id={"img1"}
                src={hotpot}
                style={{
                  height: "340px",
                  width: "250px",
                }}
              />
            </Paper>
          </Grid>
          
          <Grid item md={7} sm={7} xs={12}>
            <Paper className={classes.paper} style={{ background: 'linear-gradient(356deg, black, transparent)', boxShadow: '20px 15px 5px white', minHeight: '400px' }}>
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h2"
                  component="h2"
                  style={{ color: "white" }}
                >
                  I engineer digital
                  <br />
                  products that make an impact
                </Typography>
                <Typography variant="h5" gutterBottom className={"line1 anim-typewriter"}>
                  {/* <TextField
              id="filled-read-only-input"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
              // variant="filled"
            /> */}
                  Hey there🐼, I'm a software engineer who's highly intersted in
                  building some cool products using latest technologies I have a 3
                  year expirence in full stack.
                  I have worked on
                  <ul>
                    <li>
                      Frontend Projects using react and jquery library, have a good understanding of designing website through css and other libraries like bootstrap and material ui
                    </li>
                    <li>
                      Backend Projects using node js and python, have wriiten multiple serverless services using node and performed migration operations using batch aws.
                    </li>
                  </ul>
                </Typography>
              </ThemeProvider>
            </Paper>
          </Grid>
          <Grid item sm={4}></Grid>

          <Grid item sm={4}></Grid>

          <Grid item sm={4}></Grid>
          <Grid item sm={4}></Grid>
          <Grid item xs={12} sm={6} id="projects">
            {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
            <ThemeProvider theme={newTheme}>
              <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
                Projects Worked On 👨‍💻
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid item sm={2}></Grid>
          {/* <Grid item sm={3}></Grid> */}
          {/* <Grid item sm={6} md={6} xs={12}>

          </Grid>
          <Grid item sm={6} md={6} xs={12}>

          </Grid> */}
          <Grid item xs={12} sm={12} md={6}>
            <p style={{ textAlign: "center", fontSize: "32px", color: 'white' }}> Frontend</p>
            {frontendProjectsObj.map((project) => (
              <>
                <div className="box1">
                  <div className="content" id={`content`} onMouseOver={mouseOverModal}>
                    <Card id={`${project.ProjectName}_c`} className={cardClasses.card} style={{ background: 'linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)' }}>
                      <CardHeader id={`${project.ProjectName}_ch`} title={project.ProjectName} />
                      <CardContent id={`${project.ProjectName}_cc`}>
                        <Typography variant="body2" id={`${project.ProjectName}_typ`}>
                          {project.ProjectDescription}
                        </Typography>
                      </CardContent>
                    </Card>

                  </div>
                </div>
                <br />
              </>

            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <p style={{ textAlign: "center", fontSize: "32px", color: 'white' }}> Backend</p>
            {backendProjectsObj.map((project) => (
              <>
                <div className="box1">


                  <div className="content">
                    <Card className={`${cardClasses.card}`} style={{ background: 'linear-gradient(109.6deg, rgb(0, 37, 84) 11.2%, rgba(0, 37, 84, 0.32) 100.2%)' }}>
                      <CardHeader title={project.ProjectName} />
                      <CardContent>
                        <Typography variant="body2">
                          {project.ProjectDescription}
                        </Typography>
                      </CardContent>
                    </Card>

                    <br />
                  </div>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  {/* <br/> */}
                </div>
                <br />
              </>

            ))}
          </Grid>
          {/* <Card>
            <CardHeader
              // avatar={
              //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              //     R
              //   </Avatar>
              // }
              action={
                <IconButton aria-label="settings">
                  <StarsIcon
                    onClick={displayLinkModal}
                    style={{ color: starColor }}
                  />
                </IconButton>
              }
              title="Education Based Website- Career-Desk"
              subheader="September 14, 2018"
            />
            <CardMedia
              component="img"
              height="194"
              image={Careers}
              style={{ height: "200px", width: "500px" }}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2">
                This website is a career-desk where you can find all the
                information about your desired job.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card> */}
          {/* </Grid> */}
          <Grid item xs={6} sm={6}>
            {/* <Card> */}
            {/* <CardHeader
              // avatar={
              //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              //     R
              //   </Avatar>
              // }
              action={
                <IconButton aria-label="settings">
                  <StarsIcon
                    onClick={displayLinkModal}
                    style={{ color: starColor }}
                  />
                </IconButton>
              }
              title="Education Based Website- Career-Desk"
              subheader="September 14, 2018"
            /> */}
            {/* <CardContent>
              <Typography variant="body2">
                In this project I worked on expanding the backend reference to
                the google meet api to get accessible for more users than the
                limit for a particular sales user and assigning those
                accessibilty to the particular user by using a round-robin
                approach and atomic counter in aws
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card> */}
          </Grid>
          <Grid item sm={4}></Grid>
          <Grid item sm={4}></Grid>
          <Grid item xs={12} sm={6} id="tech-stacks">
            {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
            <ThemeProvider theme={newTheme}>
              <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
                Technologies Worked On 👨‍💻
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs={12} sm={2}></Grid>
          <Grid item xs={6} sm={2}>
            <Paper className={classes.paper}>
              <Zoom in={true} style={{ transitionDelay: "1000ms" }}>
                <img src={tsImg} style={{ height: "50px", width: "50px" }} />
              </Zoom>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Paper className={classes.paper}>
              <Zoom in={true} style={{ transitionDelay: "1500ms" }}>
                <img src={jsImg} style={{ height: "50px", width: "50px" }} />
              </Zoom>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Paper className={classes.paper}>
              <Zoom in={true} style={{ transitionDelay: "2000ms" }}>
                <img src={htmlImg} style={{ height: "50px", width: "50px" }} />
              </Zoom>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Paper className={classes.paper}>
              <Zoom in={true} style={{ transitionDelay: "2500ms" }}>
                <img src={cssImg} style={{ height: "50px", width: "50px" }} />
              </Zoom>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Paper className={classes.paper}>
              <Zoom in={true} style={{ transitionDelay: "3000ms" }}>
                <img src={reactImg} style={{ height: "50px", width: "50px" }} />
              </Zoom>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Paper className={classes.paper}>
              <Zoom in={true} style={{ transitionDelay: "3500ms" }}>
                <img src={nodeImg} style={{ height: "50px", width: "50px" }} />
              </Zoom>
            </Paper>
          </Grid>

          {/* <Grid item sm={4} md={4}></Grid> */}
          <Grid item sm={4} md={4}></Grid>
          <Grid item xs={12} sm={4} md={4} id="certifications">
            {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
            <ThemeProvider theme={newTheme}>
              <Typography variant="h4" gutterBottom style={{ color: 'white' }}>
                Certifications Gained 🦾
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid item xs={4} sm={4} md={4}>

          </Grid>
          <Grid item md={3} sm={3} xs={12} style={{ display: 'flex', flexGrow: 1, maxWidth: "400px" }}>
            <img src={dataScience} style={{ height: "250px", maxWidth: "350px", display: 'flex', flexGrow: 1, width: '350px' }} />
          </Grid>
          <Grid item md={3} sm={3} xs={12} style={{ display: 'flex', flexGrow: 1, maxWidth: "400px" }}>
            <img src={googleCloud} style={{ height: "250px", maxWidth: "350px", display: 'flex', flexGrow: 1, width: '350px' }} />
          </Grid>
          <Grid item md={3} sm={3} xs={12} style={{ display: 'flex', flexGrow: 1, maxWidth: "400px" }}>
            <img src={problemSolving} style={{ height: "250px", maxWidth: "350px", display: 'flex', flexGrow: 1, width: '350px' }} />
          </Grid>
          <Grid item md={3} sm={3} xs={12} style={{ display: 'flex', flexGrow: 1, maxWidth: "400px" }}>
            <img src={javascript} style={{ height: "250px", maxWidth: "350px", display: 'flex', flexGrow: 1, width: '350px' }} />
          </Grid>

          <Grid item sm={2}></Grid>
          <Grid item xs={12} sm={3}>
            <Stack direction="row" spacing={2}></Stack>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
