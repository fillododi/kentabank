import React, {useEffect, useState} from "react"
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import {useDispatch} from "react-redux";
import kentaBankImg from './images/KentaBank.png'
import {getPosts} from './actions/posts'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles'

const App = () => {
    const [currentPostId, setCurrentPostId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch, currentPostId])

    return <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">KentaHub</Typography>
            <img className={classes.image} src={kentaBankImg} alt="KentaBank" height="60"/>
        </AppBar>
        <Grow in>
            <Container>
                <Grid container
                      alignItems="stretch"
                      spacing={3}
                      justifyContent="space-between"
                      className={classes.mainContainer}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentPostId={setCurrentPostId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentPostId={currentPostId} setCurrentPostId={setCurrentPostId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
}

export default App