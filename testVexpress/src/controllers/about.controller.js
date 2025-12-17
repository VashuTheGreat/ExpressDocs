import { expressRepre } from "../utils/commonExporter";

export const aboutController = expressRepre({
   
      summary: "Get about by name and email",
      body:['name','email'],
      response: "About"
    
    
},(req,res)=>{
    res.send("About Controller");
})
