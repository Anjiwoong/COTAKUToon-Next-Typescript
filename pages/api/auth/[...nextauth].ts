import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from '../../../lib/auth';

import { connectToDatabase } from '../../../lib/db';

interface Provider {
  id: string;
  email: string;
  adult: boolean;
  password: string;
}

export default NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60,
    updateAge: 2 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      id: 'user-credentials',
      name: 'Credentials',

      // @ts-ignore
      async authorize(credentials: Provider) {
        const client = await connectToDatabase();

        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          id: credentials.id,
        });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Could not log you in!');
        }

        const userInfo = {
          name: user.id,
          email: user.email,
          image: user.adult,
        };

        client.close();
        return userInfo;
      },
    }),
  ],
  pages: {
    error: '/error',
    signIn: '/login',
    signOut: '/',
  },
  secret: process.env.SECRET,
});
