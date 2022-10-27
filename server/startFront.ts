import next from 'next';
import { NextServer, RequestHandler } from 'next/dist/server/next';

const dev = process.env.NODE_ENV !== 'production';

export const startFront = (): RequestHandler => {
  const nextServer: NextServer = next({ dev, customServer: true });
  console.time('************************************************** Prepared Next');
  nextServer.prepare().then(() => {
    console.timeEnd('************************************************** Prepared Next');
  });
  return nextServer.getRequestHandler();
};
