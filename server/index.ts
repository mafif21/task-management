import express, {
  Express,
  Response,
  Request,
} from 'express';
import { DataSource } from 'typeorm';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

const app: Express = express();
dotenv.config();

// parse request body
app.use(bodyParser.json());

// allow port access to another port
app.use(cors());

// PORT
const port = 4000 || process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    app.listen(port, () => console.log('hello world'));
  })
  .catch((err) => {
    console.error(
      'Error during Data Source initialization',
      err,
    );
  });
