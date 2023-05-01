import SiteOutage from "src/models/SiteOutage";
import ApiClient from "src/models/ApiClient";
import SiteInfo from "src/models/SiteInfo";
import DeviceInfo from "src/models/DeviceInfo";

class OutageController {
    async getOutages(client: ApiClient): Promise<SiteOutage[]> {

        const result: SiteOutage[] = await client.getOutages();
        return result;
    }

    async getSiteInfo(siteId: string, client: ApiClient): Promise<SiteInfo | null> {

        const result: SiteInfo | null = await client.getSiteInfo(siteId);
        return result;
    }

    async postSiteOutages(siteId: string, client: ApiClient, filterByDate: Date) {
        const siteInfo: SiteInfo | null = await client.getSiteInfo(siteId);
        if (!siteInfo)
            return;

        const allOutages: SiteOutage[] = await client.getOutages();
        const outages: SiteOutage[] = allOutages.filter((o: SiteOutage) => o.begin > filterByDate && siteInfo.hasDevice(o.id));

        outages.forEach((o: SiteOutage) =>
            o.name = siteInfo.devices[o.id].name
        );
        await client.postOutages(siteId, outages);
    }
}

export default OutageController;