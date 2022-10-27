import express, { Request, Response } from 'express';
import http from 'http';
import colors from 'colors';
import { default as initialRoutes } from './routes';
import { startFront } from './startFront';

export const startServer = (port: string | number): http.Server => {
  // @ts-ignore
  const { hot } = module;
  const handle = hot?.data?.handler ?? startFront();
  if (hot) {
    hot.dispose((data: any) => {
      data.handler = handle;
    });
  }
  const app = express();
  app.use('/api', initialRoutes);
  app.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });
  return app.listen(port, (startError?: any) => {
    if (startError) {
      console.error({ startError });
    }
    console.log(`> Ready on localhost:${port} - url ${colors.cyan(process.env.NEXT_PUBLIC_API_BASE_URL)}`);
  });
};
