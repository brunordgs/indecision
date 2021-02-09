import React from 'react';

export default function Header({ title, subtitle }) {
	return (
		<div className="header">
			<div className="container">
				<h1>{title}</h1>
				<h2>{subtitle && subtitle}</h2>
			</div>
		</div>
	);
}
