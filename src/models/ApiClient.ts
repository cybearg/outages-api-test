import type SiteOutage from "./SiteOutage"
import type SiteInfo from "./SiteInfo"

export default interface ApiClient{
    getOutages():Promise<SiteOutage[]>
    getSiteInfo(sideId:string):Promise<SiteInfo|null>
}