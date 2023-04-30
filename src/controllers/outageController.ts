import SiteOutage from "src/models/SiteOutage";
import ApiClient from "src/models/ApiClient";

class OutageController{
    getOutages(client:ApiClient):SiteOutage[]{
        return client.getOutages();
    }
}

export default OutageController;