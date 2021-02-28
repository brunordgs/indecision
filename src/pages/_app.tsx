import '../styles/index.scss';
import 'normalize.scss/normalize.scss';
import { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Indecision</title>
			</Head>
				<Component {...pageProps} />
		</>
	);
}