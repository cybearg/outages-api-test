import OutageController from "../src/controllers/outageController"

describe('getOutages', () => {
    test("is called", () => {
        const controller:OutageController = new OutageController();
        expect(controller.getOutages).not.toThrow();
    })
})

