require("dotenv").config();
import express from "express";
import connectDB from "./config/db";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";

const app = express();

let PORT: Number = 5000 || process.env.PORT;

connectDB();

app.get("/", (req, res) => {
  res.send("this is felix");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
