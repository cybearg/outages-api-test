import DeviceInfo from "./DeviceInfo";


export default class SiteInfo {
    id: string;
    name: string;
    devices: DeviceInfo[]

    constructor(id:string, name:string){
        this.id = id;
        this.name = name;
        this.devices = [];
    }
}