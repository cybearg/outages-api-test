import request from "supertest"
import app from "../src/app"
import SiteOutage from "../src/models/SiteOutage";
import { getApiClient } from "../src/services/service-injection";
import TestApiClient from "./testApiClient";

jest.mock("../src/services/service-injection", () => ({
	getApiClient: () => new TestApiClient()
}));


describe("GET /", () => {
    it("should return OK", () => {
        return request(app).get("/")
            .expect(200);
    })
});

describe("GET /outages", () => {

    const testApiClient:TestApiClient = new TestApiClient();
    let outagesFixtures:SiteOutage[];
    
    beforeAll(async () => {
        outagesFixtures = await testApiClient.getOutages();
    })

    it("should return OK", async () => {
        const response = await request(app).get("/outages")
            .expect(200)
        expect(response.status).toEqual(200);
        // expect(response.body).toEqual(outagesFixtures);
        expect(response.body.length).toEqual(6);
    })
});