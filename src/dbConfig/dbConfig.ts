import mongoose from "mongoose";

export default async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URL!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongo DB connected succesfully!");
    });
    connection.on("error", (err) => {
      console.log("connection error, make sure connection is running" + err);
    });
    process.exit();
  } catch (error) {
    console.log("something went wrong!");
    console.log(error);
  }
}
