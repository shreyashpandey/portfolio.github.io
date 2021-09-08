import { createTheme, Theme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

// define light theme colors
export const lightTheme: Theme = createTheme({
    palette: {
        type: "light",
    },
});

// define dark theme colors
export const darkTheme: Theme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#fc5a8d",
        },
        secondary: {
            main: blue[500],
        },
    },
});