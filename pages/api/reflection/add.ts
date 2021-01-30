import { v4 as uuidv4 } from "uuid";
import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import middleware from "../../../middleware/database";
import {
  Reflection,
  MongoReflection,
  NextWithMongoApiRequest,
} from "../../../utils/typedefs.js";

const addHandler = nextConnect<NextWithMongoApiRequest, NextApiResponse>();

addHandler.use(middleware);

addHandler.post(async (req, res) => {
  const newRelfection: Reflection = {
    title: req.body.title,
    body: req.body.body,
    id: uuidv4(),
    author: req.body.author,
  };

  await req.db
    .collection<MongoReflection>("reflections")
    .insertOne({ ...newRelfection, date: new Date().toDateString() });

  res.status(200).json({ success: "Successfully Inserted Document" });
});

export default addHandler;
