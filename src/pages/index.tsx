import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useEffect } from 'react';
import Button from '../components/ui/Button';
import GitHub from '../../public/icons/GitHub';

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
				<div
					style={{
						height: '100vh',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Button onClick={signIn} variant="github">
						<GitHub width={24} height={24} fill="#fff" />
						Login with GitHub
					</Button>
				</div>
			)}
		</>
	);
}
