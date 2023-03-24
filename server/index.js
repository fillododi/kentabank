import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//routes import
import postRoutes from './routes/post.js'

//server app declaration and configuration
const app = express()

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use('/posts', postRoutes)

//db connection (using https://www.mongodb.com/cloud/atlas and app startup
const CONNECTION_URL = 'mongodb+srv://fillododi:zp5W88vOfzHdisGB@cluster0.t3oaub7.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message))
