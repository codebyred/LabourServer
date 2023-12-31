import express from "express";
import routes from "./Routes/index.js"
import * as dotenv from "dotenv";

dotenv.config({path:'../.env'});

const app = express();
const port = process.env.PORT || 3007;


app.use(express.json());

app.use("/api/",routes);

app.listen(port,(err) =>{
    if(err) console.log(`Could not establish connection on ${port}`);
    console.log(`connection is established on ${port}`);
});

