import OutageController from "../src/controllers/outageController";
import { readFileSync } from "fs";
import SiteOutage from "../src/models/SiteOutage"

describe('getOutages', () => {
    let outagesFixture: SiteOutage[];
    beforeAll(() => {
        const json:any = JSON.parse(readFileSync("./test/fixtures/siteOutages.json", "utf-8"));
        outagesFixture = json.map(item => new SiteOutage(item.id, item.begin, item.string));
    })

    it.only("returns array of site outages", () => {
        const controller:OutageController = new OutageController();
        const result:SiteOutage[] = controller.getOutages();
        expect (result).toEqual(outagesFixture);
    })
})

