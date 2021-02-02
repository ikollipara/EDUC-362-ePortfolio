import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import middleware from "../../../middleware/database";
import {
  MongoReflection,
  NextWithMongoApiRequest,
} from "../../../utils/typedefs.js";
import md from "@deskeen/markdown";

const idHandler = nextConnect<NextWithMongoApiRequest, NextApiResponse>();

idHandler.use(middleware);

idHandler.get(async (req, res) => {
  const {
    query: { id },
  } = req;

  const doc = await req.db.collection("reflections").findOne<MongoReflection>({
    id: id,
  });

  const response = { ...doc, body: md.parse(doc.body).innerHTML };

  res.json(response);
});

export default idHandler;
