import express from "express";
import mongoose from "mongoose";
import cors  from 'cors'
import colors from 'colors'
import elementRouter from "./routes/routes.js"
import * as dotenv from 'dotenv'

dotenv.config()


const port = process.env.PORT || 4000;

const app = express();

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(res => {
    console.log( colors.bgCyan.white("Conection succesfully made") )
}).catch(res => {
    console.log( colors.bgRed.white("Conection failed", res ) )
})

app.use(express.json())
app.use(express.urlencoded( {extended:false} ))
app.use(cors())
app.use("/data", elementRouter);

app.listen(port, () => { console.log( colors.rainbow(`Server running in port ${port}`) ) });