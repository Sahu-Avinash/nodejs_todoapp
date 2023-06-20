import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      dbName: "backendapi",
    })
    .then((c) => console.log(`Database Connected `))
    .catch((e) => console.log(e));
};