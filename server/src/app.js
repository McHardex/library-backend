import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import chalk from 'chalk';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('*', (req, res) => {
  res.status('404').json({ status: 404, error: 'Sorry, the page you tried cannot be found' });
});

if (!module.parent) {
  app.listen(port, () => {
    console.log(`listening on port ${chalk.blue(port)}`);
  });
}

export default app;
