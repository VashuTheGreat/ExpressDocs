
import { expressRepre } from "../utils/commonExporter.js";


export const contactController = expressRepre({
    summary:"Contact Controller",
    body:["name","message"],
    response:"Contact"
},(req,res)=>{
    res.send("Contact Controller");
})
