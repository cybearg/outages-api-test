import SiteOutage from "src/models/SiteOutage";
import ApiClient from "src/models/ApiClient";
import SiteInfo from "src/models/SiteInfo";

class OutageController{
    async getOutages(client:ApiClient):Promise<SiteOutage[]>{
        
        const result:SiteOutage[] = await client.getOutages();
        return result;
    }

    async getSiteInfo(siteId:string, client:ApiClient):Promise<SiteInfo|null>{
        
        const result:SiteInfo|null = await client.getSiteInfo(siteId);
        return result;
    }

    async postSiteOutages(siteId:string, client:ApiClient, date?:Date){
        
        const siteInfo:SiteInfo|null = await client.getSiteInfo(siteId);
        const outages:SiteOutage[] = await client.getOutages();
        await client.postOutages(outages);
    }
}

export default OutageController;