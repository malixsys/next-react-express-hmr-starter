import * as express from 'express';

const router = express.Router();

router.get('/me', async (req, res) => {
  res.status(200).json({ anonymous: true });
});

router.get('/users', async (req, res) => {
  // demonstrate slow
  await new Promise((resolve) => setTimeout(resolve, 2000));

  res.status(200).json({
    users: [
      {
        id: 1,
        email: 'bob@example.com'
      },
      {
        id: 2,
        email: 'peter@company.com'
      }
    ],
    version: 1
  });
});

router.get('/posts', async (req, res) => {
  // demonstrate slow
  await new Promise((resolve) => setTimeout(resolve, 1000));

  res.status(200).json({
    posts: [
      { id: 1, title: 'post 1' },
      { id: 2, title: 'post 3' }
    ],
    version: 1
  });
});

export default router;
