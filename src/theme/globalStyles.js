import { createTheme, makeStyles } from '@material-ui/core/styles'

export const Theme = createTheme({
    palette: {
        primary: {
            main: '#FFFAFF',
            dark: '#3F403F'
        },
        secondary: {
            main: '#D8315B'
        }
    }
})

export const GlobalStyles = makeStyles({
    body: {
        color: Theme.palette.primary.main,
        backgroundColor: Theme.palette.primary.dark,
    }
});

export const UIStyles = makeStyles({
    //UI
    button: {
        '&:hover': {
            opacity: 0.8,
            color: Theme.palette.primary.main,
            backgroundColor: Theme.palette.secondary.main
        }
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
    loginForm: {
        display: 'flex',
        justifyContent: 'center'
    }
});
