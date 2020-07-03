import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link, Route} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import background from "./register-thumbnail-pic.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © Zergy '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        margin: "0",
    },
    image: {
        backgroundImage: `url("${background}")`,
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#6135BF"
    },
}));


function Login() {
    const classes = useStyles();


    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>

            {/*image container*/}
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>

            {/*form*/}
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    {/*Login form*/}
                    <form className={classes.form} noValidate>
                        <Typography component="h1" variant="h5">Log In</Typography>

                        {/*Username*/}
                        <TextField
                            id="username"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Username"
                            name="username"
                            autoComplete="username"

                        />

                        {/*Password*/}
                        <TextField
                            id="password"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />

                        {/*Login*/}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Log In
                        </Button>

                        {/*Login Link*/}
                        <Grid container>
                            <Grid item>
                                <Link to="/register">Don't have an account? Register here.</Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>

                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Login;