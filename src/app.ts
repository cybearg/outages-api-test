import express, {Express, Request, Response} from 'express';


const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server setup complete');
});


app.get('/outages', (req: Request, res: Response) => {
  res.json();
});

export default app;