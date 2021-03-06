import { signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import Button from './Button';

type Props = {
	title: string;
	subtitle: string;
};

export default function Header({ title, subtitle }: Props) {
	const [session] = useSession();
	const router = useRouter();

	useEffect(() => {
		if (!session) {
			router.push('/');
		}
	}, [session]);

	return (
		<div className="header">
			<div className="container">
				<div className="header__content">
					<section>
						<header>
							<h1>{title}</h1>
							<h2>{subtitle}</h2>
						</header>
					</section>
					<section>
						{session && (
							<>
								{
									<span>
										Hello,{' '}
										{session.user.name?.split(' ')[0]}
									</span>
								}
								<Button onClick={signOut}>Logout</Button>
							</>
						)}
					</section>
				</div>
			</div>
		</div>
	);
}
