import '../styles/index.scss';
import 'normalize.scss/normalize.scss';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function MyApp({ Component, pageProps }: AppProps) {
	const { session } = pageProps;
	const router = useRouter();

	useEffect(() => {
		if (!session) {
			router.push('/');
		}
	}, [session]);

	return (
		<>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</>
	);
}
