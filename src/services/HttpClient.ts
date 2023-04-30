import ApiClient from "src/models/ApiClient";
import SiteOutage from "src/models/SiteOutage";
import axios from "axios"


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
}

export default HttpClient;