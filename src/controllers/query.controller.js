import { expressRepre } from "../utils/commonExporter.js";

export const queryController = expressRepre({
    summary:"Query Controller",
    body:["name","message"],
    response:"Query"
},(req,res)=>{
    res.send("Query Controller");
})