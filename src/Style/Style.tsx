import {makeStyles} from "@mui/styles";

const useStyle: any = makeStyles({

    AlignCenter : {
        display: "flex",
        alignItems: "center"
    },

    Center : {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: '100vh'
    },

    SpaceBetween: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },

    Column: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: '100vh'
    },

    ColumnCenter: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },

    ColumnEnd: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        height: '100vh'
    },

    ContainerCard: {
        backgroundColor: '#fff',
        marginTop: 15,
        border: '1px solid rgba(0,0,0,0.05)',
        borderRadius: 10,
        width: 250,
        transitionDuration: '300ms'
    },

    TaskCategory: {
        marginLeft: 25,
        transitionDuration: '500ms'
    },

    CardTask: {
        position: 'relative',
        top: 0, left: 0,
        border: '1px solid rgba(0,0,0,0.05)',
        borderRadius: 10,
        padding: 20,
        transitionDuration: '500ms',
        cursor: 'pointer'
    },

    CardTaskActive: {
        backgroundColor: "#FFF",
        position: 'relative',
        top: 10, left: 10,
        border: '2px solid rgba(0,0,0,0.05)',
        borderRadius: 10,
        boxShadow: '0 20px 20px rgba(0,0,0,0.05)',
        padding: 20,
        transitionDuration: '300ms',
        cursor: 'pointer',
        '& .MuiButton-root': {
            borderRadius: 5,
            fontSize: 10
        }
    },

    ButtonCategory: {
        '& .MuiButton-root': {
            fontSize: 12,
            borderRadius: 10,
            marginLeft: 5
        }
    },

    ContainerCardFlex: {
        display: 'flex',
        alignItems: 'start',
        flexWrap: "wrap",
        transitionDuration: "300ms",
        scrollbar: 'none'
    },

    TaskForm: {
        '& .MuiTextField-root': {
            width: '100%',
            padding: 5
        }
    },

    SmallInputProfile: {
        width: 350,
        marginTop: 10,
        marginBottom: 10
    },

    LargeInputProfile: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },

    ImageBgContainer: {
        backgroundColor: "rgba(0,0,0,0.1)",
        backgroundSize: 'cover',
        height: '100vh',
        transitionDuration: '300ms'/*
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center"*/
    },

    HomeFormInput: {
        width: '20%',
        backgroundColor: "#fff",
        position: 'fixed',
        right: 10,
        borderRadius: 5,
        padding: 5,
        transitionDuration: '500ms',
        boxShadow: "0 0 3px rgba(0,0,0,0.3)"
    },

    InputFormProject: {
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        padding: 10,
        position: "fixed",
        bottom: 0,
        left: 0
    },

    InputProject: {
        border: "none",
        fontSize: 15,
        width: "80%",
        padding: 15,
        outlineStyle: "none",
        backgroundColor: "inherit",
    },

    TaskOption: {
        borderRadius: 10,
        color: "rgba(0,0,0,0.5)",
        boxShadow: '0 0 3px rgba(0,0,0,0.2)',
        padding: '10px 20px',
        width: '100%',
        marginTop: 5
    },

    FormStyle: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "rgba(255,255,255,0.9)",
        borderRadius: 10,
        padding: '0 10px',
        width: '100%',
        height: '50px',
        color: 'rgb(95,95,95)',
        transitionDuration: "300ms",
        '&:hover': { backgroundColor: "rgba(255,255,255,1)" }
    },

    TaskStyle: {
        backgroundColor: "rgba(255,255,255,0.9)",
        padding: 10,
        color: 'rgb(95,95,95)',
        fontSize: 14,
        borderRadius: 5,
        cursor: "pointer",
        transitionDuration: "300ms",
        '&:hover': { backgroundColor: "rgba(255,255,255,1)" }
    },

    CategoryForm: {
        paddingLeft: 5,
        paddingRight: 5
    },

    ContainerProfile: {
        flexGrow: 1,
        backgroundColor: 'background.default',
        padding: '20px',
        height: `calc(100vh - 40px)`,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column"
    },

    ProfilePictures: {
        borderRadius: '100%',
        overflow: "hidden",
        width: 200,
        height: 200,
        boxShadow: '1px 1px 10px 2px rgba(0,0,0,0.3)',
        cursor: "pointer"
    },

    ButtonProfile: {
        justifyContent: 'center',
        marginTop: 20,
        '& .MuiButton-root':
            { margin: 5 },
    },

})

export default useStyle;