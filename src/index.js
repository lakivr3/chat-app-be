import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from 'dotenv'
import { connectDB } from "./lib/db.js"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { app,server } from "./lib/socket.js"

dotenv.config()


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))


const PORT = process.env.PORT

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}...`)
    connectDB()
})