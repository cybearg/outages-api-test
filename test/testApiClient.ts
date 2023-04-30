import type ApiClient from "../src/models/ApiClient";

import SiteOutage from "../src/models/SiteOutage";
import { readFileSync } from "fs";

class TestApiClient implements ApiClient {
    getOutages():[SiteOutage] {
        const items = JSON.parse(readFileSync("./test/fixtures/siteOutages.json", "utf-8"));
        const outages = items.forEach(item => {
            return new SiteOutage(item.id, item.begin, item.end)
        });

        return outages;
    }
}

export default TestApiClient;