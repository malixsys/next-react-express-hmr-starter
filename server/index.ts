import { startServer } from './startServer';

const port = process.env.PORT || 3000;

const main = async () => {
  let server = startServer(port);
  // @ts-ignore
  const { hot } = module;
  if (hot) {
    hot.accept('./startServer', ({ startServer }) => {
      server.close();
      server = startServer(port);
    });
  }
};
main().catch((e) => {
  console.error(e);
  process.exit(1);
});
