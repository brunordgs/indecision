import { AppProps } from 'next/app';
import 'normalize.scss/normalize.scss';
import '../styles/index.scss';

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
