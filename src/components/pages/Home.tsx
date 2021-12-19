import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
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
import myImg from "../../images/my_img.jpg";
import jsImg from "../../images/js_img.png";
import tsImg from "../../images/ts_img.png";
import htmlImg from "../../images/html_img.png";
import cssImg from "../../images/css_img.png";
import reactImg from "../../images/react_img.png";
import nodeImg from "../../images/node_img.png";
import { TextField } from "@mui/material";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import StarsIcon from '@mui/icons-material/Stars';
import Zoom from "@mui/material/Zoom";
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
  const [starColor,setStarColor]=React.useState("white");
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const displayLinkModal = ():void => {
    setStarColor("yellow");
    alert("This is a link to my github\nhttps://github.com/shreyashpandey/Portfolio-Redeemer/tree/dev");
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          {/* <Paper className={classes.paper}> */}
            <img src={myImg} style={{ height: "340px", width: "250px" }} />
          {/* </Paper> */}
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <ThemeProvider theme={theme}>
              <Typography variant="h2" component="h2" style={{color:"white"}}>
                I engineer digital
                <br/>
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
                building some cool products using latest technologies
                I have a 1 year expirence in front-end where I have worked on react-js framework with typescript and
                 javascript.In tthis page I've listed down all the technologies and projects I've worked on with some data 
                from my github showing my consistency.
              </Typography>
            </ThemeProvider>
          </Paper>
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
        <Grid item xs={6} sm={4}>
        <Card>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <StarsIcon onClick={displayLinkModal} style={{color:starColor}}/>
          </IconButton>
        }
        title="Education Based Website- Career-Desk"
        subheader="September 14, 2018"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2">
          This website is a career-desk where you can find all the information about your desired job.
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
      </Card>
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
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
          <Card className={cardClasses.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={cardClasses.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              className={cardClasses.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <IconButton
                className={clsx(cardClasses.expand, {
                  [cardClasses.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add
                  saffron and set aside for 10 minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep
                  skillet over medium-high heat. Add chicken, shrimp and
                  chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and
                  set aside, leaving chicken and chorizo in the pan. Add
                  pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant,
                  about 10 minutes. Add saffron broth and remaining 4 1/2 cups
                  chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with
                  artichokes and peppers, and cook without stirring, until most
                  of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down
                  into the rice, and cook again without stirring, until mussels
                  have opened and rice is just tender, 5 to 7 minutes more.
                  (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then
                  serve.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          S
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
