import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import middleware from "../../../middleware/database";
import {
  Reflection,
  MongoReflection,
  NextWithMongoApiRequest,
} from "../../../utils/typedefs.js";

const reflectionHandler = nextConnect<
  NextWithMongoApiRequest,
  NextApiResponse
>();

reflectionHandler.use(middleware);

reflectionHandler.get(async (req, res) => {
  const docs = await req.db
    .collection<MongoReflection>("reflections")
    .find<MongoReflection>()
    .map((reflection) => ({
      title: reflection.title,
      body: reflection.body,
      id: reflection.id,
      author: reflection.author,
      date: reflection.date,
    }))
    .toArray();

  res.json({ reflections: docs });
});

export default reflectionHandler;