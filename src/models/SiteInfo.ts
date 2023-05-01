import DeviceInfo from "./DeviceInfo";


export default class SiteInfo {
    id: string;
    name: string;
    readonly devices: {}

    constructor(id:string, name:string){
        this.id = id;
        this.name = name;
        this.devices = {};
    }

    setDevices(deviceList:DeviceInfo[]){
        deviceList.forEach( (d:DeviceInfo) => {
            this.devices[d.id] = d;
        });
    }

    hasDevice(deviceId:string|undefined){
        if(!deviceId)
            return false;
        return this.devices[deviceId] != undefined;
    }
}