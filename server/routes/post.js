import express from "express";

import {getPosts, createPost, updatePost, deletePost, votePost} from "../controllers/post.js";

const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.patch('/:id/votePost', votePost)
router.delete('/:id', deletePost)

export default router