type Props = {
	title: string;
	subtitle: string;
};

export default function Header({ title, subtitle }: Props) {
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
				</div>
			</div>
		</div>
	);
}
