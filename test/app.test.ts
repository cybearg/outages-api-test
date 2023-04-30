import request from "supertest"
import app from "../src/app"
import { readFileSync } from "fs"



describe("GET /", () => {
    it("should return OK", () => {
        return request(app).get("/")
            .expect(200);
    })
});

describe("GET /outages", () => {

    let outagesFixture: [any];
    beforeAll(() => {
        outagesFixture = JSON.parse(readFileSync("./test/fixtures/siteOutages.json", "utf-8"));
    })

    it("should return OK", async () => {
        const response = await request(app).get("/outages")
            .expect(200)
            .set('Accept', 'application/json');
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
        // expect(response.body).toEqual(outagesFixture);
            
    })
});