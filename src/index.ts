import express, { Request, Response } from "express";
import db from "./config/db";
import router from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

db.then(() => {
  console.log("Connected to MongoDB database");
  app.listen(8000, () => {
    console.log("Server is running on port  8000");
  });
}).catch((error) => {
  console.log(error);
});
