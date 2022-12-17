import { createTheme, makeStyles } from '@material-ui/core/styles'
import { height } from '@material-ui/system';

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#FFFAFF',
            dark: '#D8315B'
        },
        secondary: {
            main: '#D8315B'
        }
    }
})

export const GlobalStyles = makeStyles({
    body: {
        color: Theme.palette.primary.main,
    }
});

export const UIStyles = makeStyles({
    root: {
        width: "100%",
    },
    //UI
    button: {
        '&:hover': {
            opacity: 0.8,
            color: Theme.palette.primary.main,
            backgroundColor: Theme.palette.primary.dark
        }
    },

    stepper: {
        display: "flex",
        width: "50%",
        justifyContent: "center",
    },
    appBar: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    appBarButtons: {
        display: 'flex',
        justifyContent: 'center'
    },

    pageHeader: {
        letterSpacing: '0px',
        wordSpacing: '-5px',
    },

    //Login
    loginFormContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
    },

    loginForm: {
        display: 'flex',
        justifyContent: 'center',
    },

    input: {
        marginBottom: Theme.spacing(2),
    },
});
