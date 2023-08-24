import { createTheme, Theme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

// define light theme colors
export const lightTheme: Theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#47a9c1",
        },
    },
});

// define dark theme colors
export const darkTheme: Theme = createTheme({
    palette: {
        type: "dark",
        primary: {
            main: '#47a9c1',
        },
        secondary: {
            main: '#47a9c1',
        },
    },
});