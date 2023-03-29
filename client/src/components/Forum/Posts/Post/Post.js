import React from "react";

import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import moment from "moment";

import useStyles from "./styles";
import {useDispatch} from "react-redux";

import {deletePost, votePost} from "../../../../actions/posts";
const Post = ({post, setCurrentPostId}) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile[0]} title={post.title}></CardMedia>
        <div className={classes.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.creationDate).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
            <Button style={{color: "white"}} size="small" onClick={()=>setCurrentPostId(post._id)}>
                <MoreHorizIcon fontSize="medium"></MoreHorizIcon>
            </Button>
        </div>
        <div className={classes.details}>
            <Typography variant="body2" color="textSecondary">{post.tags.map((tag)=>`#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
        <CardContent>
            <Typography className={classes.title} variant="body2" color="textSecondary" component="p">
                {post.message}
            </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Button size="small" color="primary" onClick={()=>{dispatch(votePost(post._id))}}>
                <ThumbUpAltIcon fontSize="small"></ThumbUpAltIcon>
                &nbsp; Vota &nbsp;
                {post.voteCount}
            </Button>
            <Button size="small" color="primary" onClick={()=>{dispatch(deletePost(post._id))}}>
                <DeleteIcon fontSize="small"></DeleteIcon>
                &nbsp; Elimina
            </Button>
        </CardActions>
    </Card>
}

export default Post