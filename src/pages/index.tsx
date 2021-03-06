import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useEffect } from 'react';
import Button from '../components/ui/Button';
import GitHub from '../../public/images/icons/GitHub';

export default function Page() {
	const [session] = useSession();
	const router = useRouter();

	useEffect(() => {
		if (session) {
			router.push('/home');
		}
	}, [session]);

	return (
		<>
			<Head>
				<title>
					Indecision. Indencision It's not a decision / Indecision
				</title>
			</Head>
			{!session && (
				<main>
					<section className="">
						<img src="/images/symbol.svg" alt="Background image" />
					</section>

					<section className="">
						<h1>Indecision</h1>
					</section>

					<section className="">
						<h1>Welcome</h1>

						<span className="">
							<img
								src="/images/icons/github.svg"
								alt="GitHub logo"
							/>

							<h2>You can do something :)</h2>
						</span>
					</section>

					<section>
						<Button onClick={signIn} variant="github">
							<GitHub width={24} height={24} fill="#fff" />
							Login with GitHub
						</Button>
					</section>
				</main>
			)}
		</>
	);
}
