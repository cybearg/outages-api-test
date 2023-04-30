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
  res.send(result);
});

export default app;