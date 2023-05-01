import { before } from "node:test";
import DeviceInfo from "../src/models/DeviceInfo";
import SiteInfo from "../src/models/SiteInfo"
describe("SiteInfo", () => {
    const device1: DeviceInfo = new DeviceInfo("002b28fc-283c-47ec-9af2-ea287336dc1b", "Battery 1");
    const device2: DeviceInfo = new DeviceInfo("086b0d53-b311-4441-aaf3-935646f03d4d", "Battery 2");
    const devices = [device1, device2];


    it("setDevices creates dictionary of devices", () => {
        const siteInfo = new SiteInfo('kingfisher', 'KingFisher');
        siteInfo.setDevices(devices);
        expect(siteInfo.devices[device1.id]).toMatchObject(device1);
        expect(siteInfo.devices[device2.id]).toMatchObject(device2);
    });

    it("hasDevice returns true when device exists at site", () => {
        const siteInfo = new SiteInfo('kingfisher', 'KingFisher');
        siteInfo.setDevices(devices);
        expect(siteInfo.hasDevice('002b28fc-283c-47ec-9af2-ea287336dc1b')).toBe(true);
    });

    it("hasDevice returns false when device does not exist at site", () => {
        const siteInfo = new SiteInfo('kingfisher', 'KingFisher');
        siteInfo.setDevices(devices);
        expect(siteInfo.hasDevice('test')).toBe(false);
    });

    it("hasDevice returns false when id is falsy", () => {
        const siteInfo = new SiteInfo('kingfisher', 'KingFisher');
        siteInfo.setDevices(devices);
        let key:string|undefined = undefined;
        expect(siteInfo.hasDevice(key)).toBe(false);
    });
});