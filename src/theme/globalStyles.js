import { createTheme, makeStyles } from '@material-ui/core/styles'

export const tfpTheme = createTheme({
    typography: {
        fontFamily: 'Rubik'
    },
    palette: {
        type: 'dark',
        background: {
            default: '#363537'
        },
        primary: {
            main: '#BA1F33',
            contrastText: '#FFFAFF',
        }
    }
})

export const GlobalStyles = makeStyles({
    body: {
        color: tfpTheme.palette.primary.contrastText,
        backgroundColor: tfpTheme.palette.primary.main
    },

    error404Container: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        width: "400px",
    },

    error404Card: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center",
    }
});

export const CardStyles = makeStyles({
    card: {
        backgroundColor: tfpTheme.palette.background,
        width: 120, 
        height: 180,
        transition: "transform 2s, height 2s",
        transform: "scale(1)",
        position: "relative",
        zIndex: "0",
            "img": {
                "&:hover":{
                    scale: "1.5",

                },
            },
        "&:hover": {
            cursor:'pointer',
            position: "relative",
            zIndex: "4",
        }
    },
    cardContent: {
        backgroundColor: tfpTheme.palette.background,
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

export const FilmViewerStyles = makeStyles({
    filmViewerSimplifiedContainer: {
        
    }
});

export const UIStyles = makeStyles({
    //Comment viewer
    commentViewerContainer: {
        padding: '8px'
    },
    //Film viewer
    filmViewerTitle: {
        position: 'relative',
        zIndex: 1,
    },

    filmViewerFilterButton: {
        marginLeft: '15px',
        transition: 'background-color .1s ease-in-out, color .1s ease-in-out',
        scale: '0.9',
        background: 'white',
        '&:hover': {
            backgroundColor: '#BA1F33',
            color: 'white',
        }
    },
    
    filmViewerHeader: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginBottom: '15px',
    },

    filmViewerContainer: {
        padding: "20px",
        marginBottom: "30px",
        display: "flex",
        alignContent: "center",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        overflowX: "scroll",
        overflowY: "hidden",
        '&::-webkit-scrollbar': {
            height: '12px'
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '20px',
            background: '#BA1F33'
        }
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

    root: {
        width: "100%",
    },

    //Search
    searchContainer: {
        color: tfpTheme.palette.primary.contrastText,
        height: '48px',
        marginBottom: '12px'
    },
    
    //UI
    button: {
        '&:hover': {
            opacity: 0.8,
            color: tfpTheme.palette.primary.contrastText,
            backgroundColor: tfpTheme.palette.background
        }
    },

    stepper: {
        display: "flex",
        width: "50%",
        justifyContent: "center",
    },

    //Nav bar
    appBar: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    appBarButtons: {
        display: 'flex',
        justifyContent: 'center'
    },

    pageHeader: {
        borderRadius: '25px'
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
        marginBottom: tfpTheme.spacing(2),
    },
});
