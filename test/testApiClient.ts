import type ApiClient from "../src/models/ApiClient";

import SiteOutage from "../src/models/SiteOutage";
import SiteInfo from "../src/models/SiteInfo"
import { readFileSync } from "fs";
import DeviceInfo from "../src/models/DeviceInfo";

class TestApiClient implements ApiClient {
    async getOutages():Promise<SiteOutage[]> {
        const items = JSON.parse(readFileSync("./test/fixtures/siteOutages.json", "utf-8"));
        const outages = items.map(item => {
            return new SiteOutage(item.id, item.begin, item.end)
        });
        return Promise.resolve(outages);
    }

    async getSiteInfo(sideId:string):Promise<SiteInfo>{
        const item = JSON.parse(readFileSync("./test/fixtures/siteInfo.json", "utf-8"));
        const siteInfo = new SiteInfo(item.id, item.name);
        siteInfo.devices = item.devices.map(d => new DeviceInfo(item.id, item.name));
           
        return Promise.resolve(siteInfo);
    }
}

export default TestApiClient;