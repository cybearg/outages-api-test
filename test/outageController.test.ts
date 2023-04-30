import OutageController from "../src/controllers/outageController";
import { readFileSync } from "fs";
import SiteOutage from "../src/models/SiteOutage"

describe('getOutages', () => {
    let outagesFixture: [any];
    beforeAll(() => {
        outagesFixture = JSON.parse(readFileSync("./test/fixtures/siteOutages.json", "utf-8"));
    })

    test("returns array of site outages", () => {
        const controller:OutageController = new OutageController();
        const result:SiteOutage[] = controller.getOutages();
    })
})

