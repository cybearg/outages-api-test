import ApiClient from "src/models/ApiClient";
import SiteOutage from "src/models/SiteOutage";

class HttpCient implements ApiClient{
    async getOutages():Promise<SiteOutage[]>{
        const result:SiteOutage[] = [];
        return Promise.resolve(result);
    }
}

export default HttpCient;