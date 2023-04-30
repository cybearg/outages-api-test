import type SiteOutage from "./SiteOutage"

export default interface ApiClient{
    getOutages():Promise<[SiteOutage]>
}