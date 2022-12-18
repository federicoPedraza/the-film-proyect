import { createTheme, makeStyles } from '@material-ui/core/styles'

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

export const CardStyles = makeStyles({
    card: {
        width: 180, 
        height: 260,
        transition: "transform 2s, height 2s ease-in-out",
        transform: "scale(1)",
        position: "relative",
        zIndex: "0",
        "&:hover": {
            position: "relative",
            height: 320,
            transform: "scale(1.5)",
            zIndex: "1",
        }
    },
})

export const UIStyles = makeStyles({
    //Film viewer
    filmViewerTitle: {
        marginBottom: "16px",
    },

    filmViewerContainer: {
        overflowX: "scroll",
    },

    filmViewer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
    },
    
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
        height: '50vh', // TODO: this is bad!
    },

    loginForm: {
        display: 'flex',
        justifyContent: 'center',
    },

    input: {
        marginBottom: Theme.spacing(2),
    },
});
