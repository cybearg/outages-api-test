import HttpClient from "../src/services/HttpClient";
import SiteOutage from "../src/models/SiteOutage"

describe("getOutages", () => {
    const client = new HttpClient();
    
    it("returns array of SiteOutages", async () => {
        const result:SiteOutage[] = await client.getOutages();
        expect(result.length).toBe(6);
    })
})