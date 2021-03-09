import { signOut, useSession } from 'next-auth/client';
import Button from './Button';

type Props = {
	title: string;
	subtitle: string;
};

export default function Header({ title, subtitle }: Props) {
	const [session] = useSession();

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
							<div className="header__info">
								<div className="header__info-content">
								<span>
									Hello, {session.user.name?.split(' ')[0]}
								</span>
								<img
									src={session.user.image as string}
									alt="GitHub profile picture"
									className="header__info-image"
								/>
								</div>
								<Button onClick={signOut} variant="link">
									Logout
								</Button>
							</div>
						)}
					</section>
				</div>
			</div>
		</div>
	);
}
