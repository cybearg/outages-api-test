import request from "supertest"
import app from "../src/app"


describe("GET /", () => {
    it("should return OK", () => {
        return request(app).get("/")
            .expect(200);
    })
});