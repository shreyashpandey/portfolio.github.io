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
import Careers from "../../images/Carrers.png";
import DiscountCalculator from "../../images/DiscountCalculator.png";
import blockly from "../../images/blockly.png";
import { TextField } from "@mui/material";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import StarsIcon from "@mui/icons-material/Stars";
import Zoom from "@mui/material/Zoom";
import { projectsObj } from "../descriptions/description";
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
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    card: {
      backgroundImage:
        "linear-gradient(to bottom right purple pink) !important",
      height: "250px !important",
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
export default function Home() {
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
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          {/* <Paper className={classes.paper}> */}
          {/* <img
            src={myImg}
            style={{
              height: "340px",
              width: "250px",
              boxShadow: "5px 10px #888888",
            }}
          /> */}
          {/* </Paper> */}
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
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
              <Typography variant="h5" gutterBottom>
                {/* <TextField
              id="filled-read-only-input"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
              // variant="filled"
            /> */}
                Hey there🐼, I'm a software engineer who's highly intersted in
                building some cool products using latest technologies I have a 1
                year expirence in front-end where I have worked on react-js
                framework with typescript and javascript.In tthis page I've
                listed down all the technologies and projects I've worked on
                with some data from my github showing my consistency.
              </Typography>
            </ThemeProvider>
          </Paper>
        </Grid>
        <Grid item sm={4}></Grid>

        <Grid item sm={4}></Grid>

        <Grid item sm={4}></Grid>
        <Grid item sm={4}></Grid>
        <Grid item xs={12} sm={6}>
          {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
          <ThemeProvider theme={newTheme}>
            <Typography variant="h4" gutterBottom>
              Projects Worked On 👨‍💻
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item sm={2}></Grid>
        {/* <Grid item sm={3}></Grid> */}
        <Grid item sm={6} xs={6}>
          <p style={{ textAlign: "center", fontSize: "32px" }}> Frontend</p>
        </Grid>
        <Grid item sm={6} xs={6}>
          <p style={{ textAlign: "center", fontSize: "32px" }}> Backend</p>
        </Grid>

        {projectsObj.map((project) => (
          <Grid item xs={6} sm={6}>
            <Card className={cardClasses.card}>
              <CardHeader title={project.ProjectName} />
              <CardContent>
                <Typography variant="body2">
                  {project.ProjectDescription}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
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
        <Grid item xs={12} sm={6}>
          {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
          <ThemeProvider theme={newTheme}>
            <Typography variant="h4" gutterBottom>
              Technologies Worked On 👨‍💻
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid item sm={2}></Grid>
        <Grid item xs={12} sm={2}>
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
      </Grid>
      <Grid item xs={6} sm={4}></Grid>
      <Grid item xs={12} sm={6}>
        {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
        <ThemeProvider theme={newTheme}>
          <Typography variant="h4" gutterBottom>
            Certifications Gained 🦾
          </Typography>
        </ThemeProvider>
      </Grid>
      <Grid item sm={2}></Grid>
      <Grid item xs={12} sm={3}>
        <Stack direction="row" spacing={2}></Stack>
      </Grid>
    </div>
  );
}
