import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";

const app: Express = express();
dotenv.config();

// PORT
const port = 4000 || process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(port, () => console.log("hello world"));
