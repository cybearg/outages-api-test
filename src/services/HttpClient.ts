import ApiClient from "src/models/ApiClient";
import SiteOutage from "src/models/SiteOutage";
import axios from "axios"
import SiteInfo from "src/models/SiteInfo";
import DeviceInfo from "src/models/DeviceInfo";


class HttpClient implements ApiClient {
    async getOutages(): Promise<SiteOutage[]> {
        const endpoint = `${process.env.API_ENDPOINT}/outages`;
        try{
            const {data} = await axios.get(
                endpoint,
                {
                    headers:{
                        'accept': 'application/json',
                        'x-api-key': process.env.API_KEY
                    }
                });
            return data;
        }catch(error:any){
                console.log("http client error", error.toJSON());
        }
        return [];
    }

    async getSiteInfo(siteId: string): Promise<SiteInfo|null> {
        const endpoint = `${process.env.API_ENDPOINT}/site-info`;
        try{
            const {data} = await axios.get(
                endpoint,
                {
                    headers:{
                        'accept': 'application/json',
                        'x-api-key': process.env.API_KEY
                    },
                    params: { 'siteId': siteId } 
                });
                
            const siteInfo = new SiteInfo(data.id, data.name);
            siteInfo.devices = data.devices.map(d => new DeviceInfo(d.id, d.name));
            return siteInfo;
        }catch(error:any){
                console.log("http client error", error.toJSON());
        }
        return null;
    }
}

export default HttpClient;