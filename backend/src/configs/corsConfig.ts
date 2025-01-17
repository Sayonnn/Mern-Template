import cors from "cors";
import { origins } from "../providers/DataProvider";

const corsConfig = cors({
    origin:(origin,callback) => {
        if(!origin || origins.indexOf(origin) != -1){
            callback(null,true);
        }else{
            callback(new Error("Request origin is unauthorized!"))
        }
    },
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
})

export default corsConfig;