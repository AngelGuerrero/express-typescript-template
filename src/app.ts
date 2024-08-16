import express from 'express';
import { router as authRouter } from './routes/authRouter';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World from my app!');
});

app.use('/auth', authRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
