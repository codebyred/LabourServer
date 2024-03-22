import {sequelize} from "../Config/db.config.js"
import { DataTypes } from "sequelize";
import { Category } from "./category.model.js";

export const Worker = sequelize.define("Worker",{

    id: {

        type: DataTypes.INTEGER,
        primaryKey:true

    },
    email:{

        type: DataTypes.STRING

    },
    firstName: {

        type: DataTypes.STRING

    },
    lastName:{

        type: DataTypes.STRING

    },
    category_id:{

        type: DataTypes.INTEGER,
        references:{
            model: Category,
            key:'id'
        }

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


