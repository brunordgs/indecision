import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const isProd = process.env.NODE_ENV === 'production';

export default (req: NextApiRequest, res: NextApiResponse) =>
	NextAuth(req, res, {
		providers: [
			GitHubProvider({
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
