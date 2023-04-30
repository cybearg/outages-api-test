import OutageController from "../src/controllers/OutageController";
import SiteOutage from "../src/models/SiteOutage"
import TestApiClient from "./testApiClient"

describe('getOutages', () => {

    let testApiClient:TestApiClient;
    let outagesFixtures:SiteOutage[];
    
    beforeAll(async () => {
        testApiClient = new TestApiClient();
        outagesFixtures = await testApiClient.getOutages();
    })

    it.only("returns array of site outages", async () => {
        const controller:OutageController = new OutageController();

        const result:SiteOutage[] = await controller.getOutages(testApiClient);
        expect (result).toEqual(outagesFixtures);
    })
})

