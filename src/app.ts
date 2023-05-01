import express, {Express, Request, Response} from 'express';
import OutageController from "./controllers/OutageController";
import {getApiClient} from "./services/service-injection"

const outageController:OutageController = new OutageController();

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

export default app;