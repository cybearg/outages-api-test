import express, {Express, Request, Response} from 'express';


const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server setup complete');
});

export default app;