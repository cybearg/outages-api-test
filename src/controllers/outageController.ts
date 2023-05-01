import SiteOutage from "src/models/SiteOutage";
import ApiClient from "src/models/ApiClient";
import SiteInfo from "src/models/SiteInfo";

class OutageController{
    async getOutages(client:ApiClient):Promise<SiteOutage[]>{
        
        const result:SiteOutage[] = await client.getOutages();
        return result;
    }

    async getSiteInfo(siteId:string, client:ApiClient):Promise<SiteInfo>{
        
        const result:SiteInfo = await client.getSiteInfo(siteId);
        return result;
    }
}

export default OutageController;