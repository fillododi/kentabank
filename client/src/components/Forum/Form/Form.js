import React, {useRef, useState, useEffect} from "react";
import {TextField, Button, Typography, Paper} from "@material-ui/core";
import FileBase from "react-file-base64";
import {useDispatch, useSelector} from "react-redux";

import useStyles from './styles'
import {createPost, updatePost} from "../../../actions/posts";


const Form = ({currentPostId, setCurrentPostId}) => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    const post = useSelector((state) =>
        currentPostId?
            state.posts.find((p)=>p._id===currentPostId):
            null
    )

    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(()=>{
        if(post){
            setPostData(post)
        }
    }, [post])

    const handleSubmit = (event) => {
        event.preventDefault()

        if(currentPostId){
            dispatch(updatePost(currentPostId, postData))
        } else {
            dispatch(createPost(postData))
        }
        clear()
    }

    const clear = () => {
        setCurrentPostId(null)
        setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''})
    }

    return <Paper className={classes.paper}>
        <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">{currentPostId? 'Modifica il': 'Crea un'} Post</Typography>
            <TextField
                name="creator"
                variant="outlined"
                label="Autore"
                fullWidth
                value={postData.creator}
                onChange={(event)=>setPostData({...postData, creator: event.target.value})}
            />
            <TextField
                name="title"
                variant="outlined"
                label="Titolo"
                fullWidth
                value={postData.title}
                onChange={(event)=>setPostData({...postData, title: event.target.value})}
            />
            <TextField
                name="message"
                variant="outlined"
                label="Testo"
                fullWidth
                value={postData.message}
                onChange={(event)=>setPostData({...postData, message: event.target.value})}
            />
            <TextField
                name="tags"
                variant="outlined"
                label="Tag"
                fullWidth
                value={postData.tags}
                onChange={(event)=>setPostData({...postData, tags: event.target.value.split(',')})}
            />
            <div className={classes.fileInput}>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64})=>setPostData({...postData, selectedFile: base64})}
                />
            </div>
            <Button
                className={classes.buttonSubmit}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
            >
                {currentPostId? 'Modifica': 'Crea'}
            </Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                {currentPostId? 'Annulla': 'Cancella'}
            </Button>
        </form>
    </Paper>
}

export default Form