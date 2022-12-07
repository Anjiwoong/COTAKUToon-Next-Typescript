import { NextApiResponse } from 'next';
import { RecentWebtoonTypes } from '../../types/mypage/recent-webtoon-types';

import { connectToDatabase } from '../../lib/db-utils';

interface Request {
  method: string;
  body: RecentWebtoonTypes;
}

const handler = async (req: Request, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body;

    const { userId } = data;

    const client = await connectToDatabase();

    const db = client?.db();

    const existingUser = await db?.collection('users').findOne({ id: userId });

    const removeWebtoon = await db
      ?.collection('users')
      .updateOne({ _id: existingUser?._id }, { $set: { recentWebtoon: [] } });

    res.status(201).json({ message: 'remove recent webtoon!' });
    client?.close();
  }
};

export default handler;
