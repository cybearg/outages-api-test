import axios from "axios"

import ApiClient from "../models/ApiClient";
import SiteOutage from "../models/SiteOutage";
import SiteInfo from "../models/SiteInfo";
import DeviceInfo from "../models/DeviceInfo";


class HttpClient implements ApiClient {
    async getOutages(): Promise<SiteOutage[]> {
        const endpoint = `${process.env.API_ENDPOINT}/outages`;
        try {
            const { data } = await axios.get(
                endpoint,
                {
                    headers: {
                        'accept': 'application/json',
                        'x-api-key': process.env.API_KEY
                    }
                });
            const outages = data.map(item =>
                new SiteOutage(item.id, item.begin, item.end)
            );
            return outages;
        } catch (error: any) {
            console.log("http client error", error.toJSON());
        }
        return [];
    }

    async getSiteInfo(siteId: string): Promise<SiteInfo | null> {
        const endpoint = `${process.env.API_ENDPOINT}/site-info/${siteId}`;
        try {
            const { data } = await axios.get(
                endpoint,
                {
                    headers: {
                        'accept': 'application/json',
                        'x-api-key': process.env.API_KEY
                    }
                });

            const siteInfo = new SiteInfo(data.id, data.name);
            siteInfo.devices = data.devices.map((d:DeviceInfo) => new DeviceInfo(d.id, d.name));
            return siteInfo;
        } catch (error: any) {
            console.log("http client error", error.toJSON());
        }
        return null;
    }

    postOutages(outages:SiteOutage[]) {
        throw new Error("Method not implemented.");
    }


}

export default HttpClient;