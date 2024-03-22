import {sequelize} from "../Config/db.config.js"
import { DataTypes } from "sequelize";

export const Category = sequelize.define("Category",{

    id: {

        type: DataTypes.INTEGER,
        primaryKey:true

    },
    name: {

        type: DataTypes.STRING

    },
    description:{

        type: DataTypes.STRING

    }

},{
    timestamps:false
});

(async ()=>{
    try{
        await Category.sync();
    }catch(e){

    }
    
})();


