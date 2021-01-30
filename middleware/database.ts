import type { NextWithMongoApiRequest } from '../utils/typedefs'
import type { NextApiResponse } from 'next';
import { MongoClient } from 'mongodb'
import nextConnect, { NextHandler } from 'next-connect';

const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function database(req: NextWithMongoApiRequest, res: NextApiResponse, next: NextHandler) {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db(process.env.MONGO_DB);
    return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;