import OutageController from "../src/controllers/outageController";
import { readFileSync } from "fs";
import SiteOutage from "../src/models/SiteOutage"
import TestApiClient from "./testApiClient"

describe('getOutages', () => {

    let testApiClient:TestApiClient;
    let outagesFixtures:SiteOutage[];
    
    beforeAll(() => {
        testApiClient = new TestApiClient();
        outagesFixtures = testApiClient.getOutages();
    })

    it.only("returns array of site outages", () => {
        const controller:OutageController = new OutageController();
        
        const result:SiteOutage[] = controller.getOutages(testApiClient);
        expect (result).toEqual(outagesFixtures);
    })
})

