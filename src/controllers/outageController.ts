import SiteOutage from "src/models/SiteOutage";
import ApiClient from "src/models/ApiClient";

class OutageController{
    async getOutages(client:ApiClient):Promise<SiteOutage[]>{
        
        const result = await client.getOutages();
        console.log(result);
        return result;
    }
}

export default OutageController;