import axios from "axios"

const url = "http://localhost:5000/posts"

export const fetchPosts = () => axios.get(url)

export const createPost = (newPost) => axios.post(url, newPost)

export const updatePost = (id, postData) => axios.patch(`${url}/${id}`, postData)

export const deletePost = (id) => axios.delete(`${url}/${id}`)

export const votePost = (id) => axios.patch(`${url}/${id}/votePost`)