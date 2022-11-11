import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

interface Request {
  method: string;
  body: {
    id: string;
    password: string;
    email: string;
    adult: boolean;
  };
}

interface Response {
  status: (num: number) => any;
}

const handler = async (req: Request, res: Response) => {
  if (req.method !== 'POST') return;

  const data = req.body;

  const { id, password, email, adult } = data;

  if (!id || !password || password.trim().length < 7) {
    res.status(422).json({
      message:
        'Invalid input - password should also be at least 7 characters long.',
    });
    return;
  }

  const client = await connectToDatabase();

  const db = client.db();

  const existingUser = await db.collection('users').findOne({ id: id });

  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);
  const isAdult = new Date().getFullYear() - +adult >= 19;

  const result = await db.collection('users').insertOne({
    id: id,
    password: hashedPassword,
    email: email,
    adult: isAdult,
  });

  res.status(201).json({ message: 'Created user!' });
  client.close();
};

export default handler;
