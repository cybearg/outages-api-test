import type ApiClient from "../src/models/ApiClient";

import SiteOutage from "../src/models/SiteOutage";
import { readFileSync } from "fs";

class TestApiClient implements ApiClient {
    async getOutages():Promise<SiteOutage[]> {
        const items = JSON.parse(readFileSync("./test/fixtures/siteOutages.json", "utf-8"));
        const outages = items.map(item => {
            return new SiteOutage(item.id, item.begin, item.end)
        });
        return Promise.resolve(outages);
    }
}

export default TestApiClient;