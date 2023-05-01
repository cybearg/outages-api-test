import express, {Express, Request, Response} from 'express';
import OutageController from "./controllers/OutageController";
import {getApiClient} from "./services/service-injection"

const outageController:OutageController = new OutageController();
const FILTER_BY_DATE = new Date('2022-01-01T00:00:00.000Z');
const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server setup complete');
});


app.get('/outages', async (req: Request, res: Response) => {
  const result = await outageController.getOutages(getApiClient());
  res.json(result);
});

app.get('/site-info/:siteId', async (req: Request, res: Response) => {
  const result = await outageController.getSiteInfo(req.params.siteId, getApiClient());
  res.json(result);
});

app.get('/update-outages/:siteId', async (req: Request, res: Response) => {
  const result = await outageController.postSiteOutages(req.params.siteId, getApiClient(), FILTER_BY_DATE);
  res.json(result);
});
export default app;