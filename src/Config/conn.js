import mysql from 'mysql2/promise';


async function ConnectToDatabase(){

    const connection = await mysql.createConnection({

        host     : process.env.DB_HOST,
        user     : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME
        
    });

    await connection.connect((err)=>{

        if(err) console.log("Database connection failed");
        console.log("Database connection established");
    
    });

    return connection;
}


export {ConnectToDatabase};