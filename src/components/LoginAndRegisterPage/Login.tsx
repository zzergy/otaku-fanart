import React, {ChangeEvent, useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link, Route, Switch} from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import background from "./register-thumbnail-pic.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {UserInterface} from "../UserInterface";
import { useHistory } from "react-router-dom";
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
}));

export interface LoginResponse {
    user: UserInterface
}

interface LoginProps {
    onLogin: (response: LoginResponse) => void
}

export function Login(props: LoginProps) {
    const classes = useStyles();
    const history = useHistory();

    const [currentState, setState] = useState({
        username: "",
        password: "",
        errorMessage: "",
    });

    function handleChange(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        const newState = {
            ...currentState,
            [event.target.name]: event.target.value
        };

        setState(newState)
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        makeRequestToTheServer('POST', 'http://localhost:3001/api/users/login', {
            username: currentState.username,
            password: currentState.password
        }).then(//if everything is oke
             (response) => {
                props.onLogin(response);

                setState(
                    {
                        ...currentState,
                        errorMessage: ''
                    }
                );
                 history.push('/');
            }
        ).catch(//if there is something wrong
            function (response) {
                setState(
                    {
                        ...currentState,
                        errorMessage: 'Wrong username or password'
                    }
                );
            }
        );
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline/>

            {/*image container*/}
            <Grid item xs={false} sm={4} md={7} className={classes.image}/>

            {/*form*/}
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    {/*Login form*/}
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
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
                            onChange={handleChange}
                            error={!!currentState.errorMessage}
                            helperText={currentState.errorMessage}
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
                            onChange={handleChange}
                            error={!!currentState.errorMessage}
                            helperText={currentState.errorMessage}
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

