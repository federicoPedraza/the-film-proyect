import { createTheme, makeStyles } from '@material-ui/core/styles'

export const Theme = createTheme({
    palette: {
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
    }
});

export const CardStyles = makeStyles({
    card: {
        backgroundColor: Theme.palette.secondary.main,
        width: 180, 
        height: 270,
        transition: "transform 2s, height 2s",
        transform: "scale(1)",
        position: "relative",
        zIndex: "0",
        transformOrigin: "center",
        "&:hover": {
            position: "relative",
            transform: "scale(1.5)",
            zIndex: "1",
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
        height: "75%",
        width: "100%",
        transition: "height 0.1s",
        objectFit: "cover",
    }
})

export const UIStyles = makeStyles({
    //Film viewer
    filmViewerTitle: {
        display: "block",
        marginBottom: "16px",
    },

    filmViewerContainer: {
        overflow: "hidden",
    },
    
    filmViewer: {
        marginLeft: "40px",
        marginRight: "40px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    filmClass: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "flex-start",
    },

    navigationButton: {
        width: 40, 
        height: 270,
        transition: "transform 2s, height 2s",
        transform: "scale(1)",
        position: "relative",
        zIndex: "2",
        transformOrigin: "center",
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
