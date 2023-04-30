import ApiClient from "src/models/ApiClient";
import HttpClient from "./HttpClient";

export function getApiClient(): ApiClient {	
	return new HttpClient();
}
