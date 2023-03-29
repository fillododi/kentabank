import {AppBar, Avatar, Button, Toolbar, Typography} from "@material-ui/core";
import kentaBankImg from "../../images/KentaBank.png";
import React from "react";
import useStyles from './styles'
import {Link} from "react-router-dom";

const Navbar = () => {
    const classes = useStyles()

    const user = null

    return <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography className={classes.heading} variant="h2" align="center" component={Link} to='/'>
                KentaHub
            </Typography>
            <Typography className={classes.heading} variant="h5" align="center" component={Link} to='/forum'>
                KentaForum
            </Typography>
            <img className={classes.image} src={kentaBankImg} alt="KentaBank" height="60"/>
        </div>
        <Toolbar classes={classes.toolbar}>
            {user?
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt[0]}</Avatar>
                    <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                    <Button variant="contained" className={classes.logout} color="secondary">Esci</Button>
                </div>:
                <Button component={Link} to="/auth" variant="contained" color="primary">Accedi</Button>
            }
        </Toolbar>
    </AppBar>
}


export default Navbar