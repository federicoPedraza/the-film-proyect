import { createTheme, makeStyles } from '@material-ui/core/styles'

export const Theme = createTheme({
    typography: {
        fontFamily: 'Rubik'
    },
    palette: {
        type: 'dark',
        background: {
            default: '#363537'
        },
        primary: {
            main: '#FFFAFF',
        },
        secondary: {
            main: '#BA1F33'
        }
    }
})

export const GlobalStyles = makeStyles({
    body: {
        color: Theme.palette.primary.main,
        backgroundColor: Theme.palette.primary.dark
    }
});

export const CardStyles = makeStyles({
    card: {
        backgroundColor: Theme.palette.secondary.main,
        width: 120, 
        height: 180,
        transition: "transform 2s, height 2s",
        transform: "scale(1)",
        position: "relative",
        zIndex: "0",
        "&:hover": {
            cursor:'pointer',
            position: "relative",
            width: 240, 
            height: 360,
            zIndex: "4",
        }
    },
    cardContent: {
        backgroundColor: Theme.palette.secondary.main,

    },
    cardMedia: {
        height: "100%",
        width: "100%",
        transition: "height 0.1s",
        objectFit: "contain",
    },
    cardMediaHover: {
        height: "65%",
        width: "100%",
        transition: "height 0.1s",
        objectFit: "cover",
    }
})

export const UIStyles = makeStyles({
    //Comment viewer
    commentViewerContainer: {
        padding: '8px'
    },
    //Film viewer
    filmViewerTitle: {
        marginLeft: "38px",
        marginBottom: "4px",
    },

    filmViewerContainer: {
        marginBottom: "30px",
        overflow: "visible",
        padding: "8px",
    },
    
    filmViewer: {
        marginLeft: "10px",
        marginRight: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    filmClass: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
    },

    navigationButtonContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },

    navigationButton: {
        width: 10, 
        height: 10,
        zIndex: "5",
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
