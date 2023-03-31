//dependency import
import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"

//routes import
import postRoutes from './routes/post.js'

//server app declaration and configuration
const app = express()

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
dotenv.config()

app.use('/posts', postRoutes)

//db connection (using https://www.mongodb.com/cloud/atlas and app startup
const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))
