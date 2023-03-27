import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res)=>{
    try{
        const postMessages = await PostMessage.find()
        console.log(postMessages)

        res.status(200).json(postMessages)
    } catch (e) {
        res.status(404).json({message: e.message})
    }
}

export const createPost = async (req, res)=>{
    const post = req.body

    const newPost = new PostMessage(post)

    try{
        await newPost.save()
        res.status(201).json(newPost)
    } catch (e) {
        res.status(409).json({message: e.message})
    }
}

export const updatePost = async(req, res) => {
    const {id: _id} = req.params
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Nessun post ha questo id')

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {new: true})
    res.json(updatedPost)
}