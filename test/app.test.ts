import request from "supertest"
import app from "../src/app"


describe("GET /", () => {
    it("should return OK", () => {
        return request(app).get("/")
            .expect(200);
    })
});

describe("GET /outages", () => {
    it("should return OK", () => {
        return request(app).get("/outages")
            .expect(200)
            .then((response)=>{
                expect(response).toBeTruthy()
            })
            .catch((err)=>{
                expect(err).toBeFalsy()
            });
    })
});