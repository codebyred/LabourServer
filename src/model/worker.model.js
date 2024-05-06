import {sequelize} from "../Config/db.config.js"
import { DataTypes } from "sequelize";


export const Worker = sequelize.define("Worker",{

    id: {

        type: DataTypes.INTEGER,
        primaryKey:true

    },
    firstName: {

        type: DataTypes.STRING,

    },
    lastName:{

        type: DataTypes.STRING,

    },
    location:{
        type: DataTypes.STRING,

    },
    job:{
        type: DataTypes.STRING
    },
    charge:{
        type: DataTypes.STRING
    }


},{
    timestamps:false
});

(async ()=>{
    try{
        await Worker.sync();
    }catch(e){

    }
    
})();


