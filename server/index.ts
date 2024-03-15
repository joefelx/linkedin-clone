require("dotenv").config();
import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";

import connectDB from "./config/db";
import schema from "./schema/schema";
import SupaBaseFunctions from "./supabase";

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./tmp/",
  })
);

let PORT: Number = 5000 || process.env.PORT;

connectDB();

const supabase = new SupaBaseFunctions();

app.get("/", (req, res) => {
  res.send("this is felix");
});

app.post("/create-bucket", async (req, res) => {
  const { bucketName } = req.body;

  const { data, error } = await supabase.createBucket(bucketName);

  if (data) {
    res.status(201).json(data);
  } else {
    res.status(400).json(error);
  }
});

app.get("/get-bucket", async (req, res) => {
  const { data, error } = await supabase.getBucket();

  if (data) {
    res.status(201).json(data);
  } else {
    res.status(400).json(error);
  }
});

app.post("/upload", async (req, res) => {
  const { bucketName } = req.body;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const file = req.files.post;
  if (file) {
    console.log(file);
  }

  // const { data, error } = await supabase.updateFile(bucketName, );

  res.json("file");
  // if (data) {
  //   res.status(201).json(data);
  // } else {
  //   res.status(400).json(error);
  // }
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
