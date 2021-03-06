import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const isProd = process.env.NODE_ENV === 'production';

export default (req: NextApiRequest, res: NextApiResponse) =>
	NextAuth(req, res, {
		providers: [
			Providers.GitHub({
				clientId: process.env.GITHUB_ID as string,
				clientSecret: process.env.GITHUB_SECRET as string,
			}),
		],
		debug: !isProd,
		secret: process.env.AUTH_SECRET,
		jwt: {
			secret: process.env.JWT_SECRET,
		},
	});
