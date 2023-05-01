import type SiteOutage from "./SiteOutage"
import type SiteInfo from "./SiteInfo"

export default interface ApiClient{
    getOutages():Promise<SiteOutage[]>
    getSiteInfo(siteId:string):Promise<SiteInfo|null>
    postOutages(sireId:string, outages:SiteOutage[])
}