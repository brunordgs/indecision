import React, { MouseEventHandler } from 'react';

type Props = {
	value?: string;
	onClick?: MouseEventHandler;
	className?: string;
	disabled?: boolean;
};

export default function Button({ value, onClick, className, disabled }: Props) {
	return (
		<>
			<button onClick={onClick} className={className} disabled={disabled}>
				{value}
			</button>
		</>
	);
}
