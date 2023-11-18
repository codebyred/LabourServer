import express from "express";
import cors from "cors";
import {Server} from "socket.io";
import routes from "./Routes/index.js"
import * as dotenv from "dotenv";

dotenv.config({path:'./.env'});

// const io = new Server(3000,{
//     cors:{
//         origin:['http://localhost:5173', 'http://127.0.0.1:5500']
//     }
// });

const users = [
    {email:"j@gmail.com", password:"2486"},
    {email:"kalam", password:"257"},
    {email:"Rashed", password:"896"}
]

const app = express();
const port = process.env.PORT || 3007;

app.use(cors({
    origin:["http://localhost:5173", "http://127.0.0.1:5500"],
    credentials:true,
    allowedHeaders:'Content-Type,Authorization'
}));

app.use(express.json());

app.use("/api/",routes);

let newusers = [{id:1,name:"A"},{id:2, name:"B"}]
// io.on("connection",(socket)=>{

//     socket.id = newusers[0].id;
//     console.log(socket.id);

// })


app.listen(port,(err) =>{
    if(err) console.log("umm something is wrong");
    console.log(`connection is established on ${port}`);
});

