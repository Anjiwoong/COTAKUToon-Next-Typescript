import { NextApiResponse } from 'next';
import { RecentWebtoonTypes } from '../../types/mypage/recent-webtoon-types';

import { connectToDatabase } from '../../lib/db-utils';

interface Request {
  method: string;
  body: RecentWebtoonTypes;
}

const handler = async (req: Request, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const client = await connectToDatabase();

      const db = client?.db();

      const document = await db?.collection('users').find({}).toArray();

      res.json({ status: 200, data: document });
    } catch (error) {
      console.log(error);
    }
  }

  if (req.method === 'POST') {
    const data = req.body;

    const {
      userId,
      id,
      title,
      cover,
      author,
      freeEpisode,
      rating,
      views,
      category,
    } = data;

    const client = await connectToDatabase();

    const db = client?.db();

    const existingUser = await db?.collection('users').findOne({ id: userId });

    const existingWebtoon = existingUser?.recentWebtoon
      ?.map((data: RecentWebtoonTypes) => data.title)
      .find((data: string) => data === title);

    if (existingWebtoon === undefined) {
      const clickedWebtoon = await db?.collection('users').updateOne(
        { _id: existingUser?._id },
        {
          $push: {
            recentWebtoon: {
              id,
              title,
              cover,
              author,
              freeEpisode,
              rating,
              views,
              category,
            },
          },
        }
      );
    }

    res.status(201).json({ message: 'add recent webtoon!' });
    client?.close();
  }
};

export default handler;
