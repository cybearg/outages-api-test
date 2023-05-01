import OutageController from "../src/controllers/OutageController";
import SiteOutage from "../src/models/SiteOutage"
import SiteInfo from "../src/models/SiteInfo"
import TestApiClient from "./testApiClient"

describe('getOutages', () => {

    let testApiClient:TestApiClient;
    let outagesFixtures:SiteOutage[];
    let siteInfoFixtures:SiteInfo|null;
    
    beforeAll(async () => {
        testApiClient = new TestApiClient();
        outagesFixtures = await testApiClient.getOutages();
        siteInfoFixtures = await testApiClient.getSiteInfo('kingfisher');
    })

    it("fetches site outages", async () => {
        const controller:OutageController = new OutageController();

        const result:SiteOutage[] = await controller.getOutages(testApiClient);
        expect (result).toEqual(outagesFixtures);
    })

    it("fetches site info", async () => {
        const controller:OutageController = new OutageController();

        const result:SiteInfo|null = await controller.getSiteInfo('kingfisher',testApiClient);
        expect (result).toEqual(siteInfoFixtures);
    })

    it("returns null when site info not found", async () => {
        const controller:OutageController = new OutageController();

        const result:SiteInfo|null = await controller.getSiteInfo('dasdas',testApiClient);
        expect (result).toBeNull();
    })
})

