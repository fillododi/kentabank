import React, {useEffect, useState} from "react"
import {Container, Grow, Grid} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {getPosts} from '../../actions/posts'
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import useStyles from './styles'

const Forum = () => {
    const [currentPostId, setCurrentPostId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch, currentPostId])

    return <Container maxWidth="lg">
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

export default Forum