import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import indexRoutes from './routes/index.js';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static(path.join(process.cwd(), 'public'))); 

app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
