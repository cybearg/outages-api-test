import SiteOutage from "src/models/SiteOutage";
import ApiClient from "src/models/ApiClient";
import SiteInfo from "src/models/SiteInfo";
import DeviceInfo from "src/models/DeviceInfo";

class OutageController{
    async getOutages(client:ApiClient):Promise<SiteOutage[]>{
        
        const result:SiteOutage[] = await client.getOutages();
        return result;
    }

    async getSiteInfo(siteId:string, client:ApiClient):Promise<SiteInfo|null>{
        
        const result:SiteInfo|null = await client.getSiteInfo(siteId);
        return result;
    }

    async postSiteOutages(siteId:string, client:ApiClient, date:Date){
        const siteInfo:SiteInfo|null = await client.getSiteInfo(siteId);
        if(!siteInfo)
            return;

        const allOutages: SiteOutage[] = await client.getOutages();
        const filteredByDate: SiteOutage[] = allOutages.filter((o: SiteOutage) => o.begin > date);
        const outages: SiteOutage[] = filteredByDate.filter((o: SiteOutage) => siteInfo.devices.some((d: DeviceInfo) => d.id === o.id));
        outages.forEach((o: SiteOutage) => {
            const device = siteInfo.devices.find(d => d.id === o.id);
            o.name = device ? device.name : ''
        });
        await client.postOutages(outages);
    }
}

export default OutageController;