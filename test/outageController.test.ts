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
})

describe("getSiteInfo", ()=> {

    let testApiClient:TestApiClient;
    let siteInfoFixtures:SiteInfo|null;
    const controller:OutageController = new OutageController();

    
    beforeAll(async () => {
        testApiClient = new TestApiClient();
        siteInfoFixtures = await testApiClient.getSiteInfo('kingfisher');
    })
    it("fetches site info", async () => {

        const result:SiteInfo|null = await controller.getSiteInfo('kingfisher',testApiClient);
        expect (result).toEqual(siteInfoFixtures);
    })

    it("returns null when site info not found", async () => {

        const result:SiteInfo|null = await controller.getSiteInfo('dasdas',testApiClient);
        expect (result).toBeNull();
    })
})

describe("postSiteOutages", () => {
    const controller:OutageController = new OutageController();
    const testApiClient:TestApiClient = new TestApiClient();
    testApiClient.postOutages = jest.fn();

    let siteInfoFixtures:SiteInfo|null;
    let outagesFixtures:SiteOutage[];
    const siteId ='kingfisher';

    beforeAll(async () => {
        siteInfoFixtures = await testApiClient.getSiteInfo('kingfisher');
        outagesFixtures = await testApiClient.getOutages();
    })

    it("posts site outages for site id", async() => {
        const filterBydate = new Date('2022-01-01T00:00:00.000Z');
        const expectedOutages = testApiClient.getExpectedOutages();
        const result = await controller.postSiteOutages(siteId,testApiClient,filterBydate);

        expect(testApiClient.postOutages).toHaveBeenCalledWith(expectedOutages);
    });
})



