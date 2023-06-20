import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.Mongo_URL, {
      dbName: "backendapi",
    })
    .then((c) => console.log(`Database Connected ${c.Connection.host}`))
    .catch((e) => console.log(e));
};