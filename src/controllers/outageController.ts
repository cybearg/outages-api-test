import SiteOutage from "src/models/SiteOutage";
import ApiClient from "src/models/ApiClient";

class OutageController{
    async getOutages(client:ApiClient):Promise<SiteOutage[]>{
        return await client.getOutages();
    }
}

export default OutageController;