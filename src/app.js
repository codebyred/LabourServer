import express from "express";
import routes from "./Routes/index.js"
import * as dotenv from "dotenv";

dotenv.config({path:'../.env'});

const app = express();
const port = process.env.PORT || 3007;


app.use(express.json());

app.use("/api/",routes);

app.listen(port, async (err) =>{

    if(err) return console.log(`Could not establish connection on ${port}`);

    console.log(`connection is established on ${port}`);

    const register = async(req, res)=>{

        const body = {

            api:"workerapi",
            host:"http://localhost",
            port: port,
            url:`http://localhost:${port}`
    
        }
        
    
        const fetchOptions = {
            method: 'POST',
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify(body),
            credentials: "include",
        }
    
        const apiGatewayURL = "http://localhost:3000/register";
        const apiGatewayRes = await fetch(apiGatewayURL, fetchOptions);
        const data = apiGatewayRes.json();
    }

    try{    

        await register();

    }catch(e){

        console.log(e);
        
    }

});

