import React, {ChangeEvent, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import background from "./register-thumbnail-pic.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {makeRequestToTheServer} from "../utils";

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
    textField: {}
}));

function Register() {
    const classes = useStyles();

    //current state
    const [currentState, setState] = useState(
        {
            username: "",
            password: "",
            confirmPassword: "",
            passwordErrorMessage: "",
        }
    );

    function handleChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {

        const newState = {
            ...currentState,
            [event.target.name]: event.target.value
        };

        //This is a warning that notifies that the data that is being received can be from another textField.
        //but we know that there are only 3 fields
        // @ts-ignore

        if (newState.password !== newState.confirmPassword) {
            //newState passwordErrorMessage  <<
            newState.passwordErrorMessage = "Passwords must match";
        }

        if (newState.password === newState.confirmPassword) {
            newState.passwordErrorMessage = "";
        }

        setState(newState);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const response = await makeRequestToTheServer('GET', 'http://localhost:3001/api/users/register', {
            username: currentState.username,
            password: currentState.password
        });
        console.log(response);
    }


    //----------------------------------- RENDER -----------------------------------
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>

            {/*image container*/}
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>

            {/*form*/}
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    {/*register form*/}
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Typography component="h1" variant="h5">Sign Up</Typography>

                        {/*Username*/}
                        <TextField className={classes.textField}
                                   id="username"
                                   variant="outlined"
                                   margin="normal"
                                   required
                                   fullWidth
                                   label="Username"
                                   name="username"
                                   autoComplete="username"
                                   onChange={handleChange}
                        />

                        {/*Password*/}
                        <TextField
                            id="password"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={handleChange}
                            //!! makes the string to a boolean
                            error={!!currentState.passwordErrorMessage}
                            helperText={currentState.passwordErrorMessage}
                        />

                        {/*Confirm Password*/}
                        <TextField
                            id="confirmPassword"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            onChange={handleChange}
                            //!! makes the string to a boolean
                            error={!!currentState.passwordErrorMessage}
                            helperText={currentState.passwordErrorMessage}
                        />

                        {/*Submit*/}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>

                        {/*Login Link*/}
                        <Grid container>
                            <Grid item>
                                <Link to="/login">Already have an account? Log In</Link>
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

export default Register;