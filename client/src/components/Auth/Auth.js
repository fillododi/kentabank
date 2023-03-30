import React, {useState} from "react";
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import GoogleLogin from "react-google-login";

import useStyles from './styles'
import Input from "./Input";
import Icon from './Icon'

const Auth = () => {
    const classes = useStyles()

    const [showPassword, setShowPassword] = useState(false)
    const [signUp, setSignUp] = useState(false)

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword)

    const switchMode = () => {
        setSignUp((prevSignUp)=>!prevSignUp)
        setShowPassword(false)
    }

    const googleSuccess = async (res) => {
        console.log(res)
    }

    const googleFailure = (error) => {
        console.log(error)
        console.log("Google sign-in unsuccessful")
    }

    return <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon></LockOutlinedIcon>
            </Avatar>
            <Typography variant="h5">{signUp? 'Registrati': 'Accedi'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {signUp &&
                        <>
                            <Input name="firstName" label="Nome" handleChange={handleChange} autoFocus halfWidth/>
                            <Input name="lastName" label="Cognome" handleChange={handleChange} halfWidth/>
                        </>
                    }
                    <Input name="email" label="E-Mail" handleChange={handleChange} type="email"/>
                    <Input name="password"
                           label="Password"
                           handleChange={handleChange}
                           type={showPassword? "text": "password"}
                           handleShowPassword={handleShowPassword}
                    />
                    {signUp &&
                        <Input name="confirmPassword"
                               label="Ripeti la Password"
                               handleChange={handleChange}
                               type="password"/>
                    }
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    {signUp? "Registrati": "Accedi"}
                </Button>
                <GoogleLogin clientId="218423465251-2nom4ohe7gfur3e6e0uh09uo9mcdun19.apps.googleusercontent.com"
                             render={(renderProps)=>
                                 <Button className={classes.googleButton}
                                         color="primary"
                                         fullWidth
                                         onClick={renderProps.onClick}
                                         disabled={renderProps.disabled}
                                         startIcon={<Icon/>}
                                         variant="contained">
                                     Accedi con Google
                                 </Button>
                             }
                             onSuccess={googleSuccess}
                             onFailure={googleFailure}
                             cookiePolicy="single_host_origin"
                />
                <Grid container justify="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                            {signUp? "Hai già un account? Accedi": "Non hai un account? Registrati"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
}

export default Auth