import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
  const mongodb_url = process.env.NEXT_PUBLIC_MONGODB_URL;
  if (mongodb_url === undefined) return;

  const client = await MongoClient.connect(mongodb_url);

  return client;
};
