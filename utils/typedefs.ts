import { v4 as uuidv4 } from "uuid";
import { Db, MongoClient } from "mongodb";
import type { NextApiRequest } from "next";

type Id = number;

type Maybe<T> = T | null;

interface NextWithMongoApiRequest extends NextApiRequest {
  dbClient: Maybe<MongoClient>;
  db: Maybe<Db>;
}

type Reflection = {
  title: string;
  body: string;
  id: string;
  author: string;
};

type MongoReflection = Reflection & { _id: unknown; date: string };

export type { Id, NextWithMongoApiRequest, Maybe, Reflection, MongoReflection };
