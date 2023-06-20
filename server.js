import { app } from "./app.js";
import { connectDb } from "./data/database.js";

connectDb();
// console.log(process.env.port)

app.listen(4000, () => {
    console.log(`server is working on ${process.env.PORT} in ${process.env.NODE_ENV}`);
  });