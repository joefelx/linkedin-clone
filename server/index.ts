require("dotenv").config();
import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";

import connectDB from "./config/db";
import schema from "./schema/schema";

const app = express();
app.use(cors());

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
