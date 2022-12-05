import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

export const connectToDatabase = async () => {
  const mongodb_url = process.env.MONGODB_URL;
  if (mongodb_url === undefined) return;

  const client = await MongoClient.connect(mongodb_url);

  return client;
};
