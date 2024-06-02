import mongoose from "mongoose";


export const connectDB = (uri) => {
  mongoose
    .connect(uri, {
      dbName: "Bill-DB",
    })
    .then((c) => console.log(`DB connected to ${c.connection.host}`))
    .catch((e) => console.log(e));
};
