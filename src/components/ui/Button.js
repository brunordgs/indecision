import React from 'react';

export default function Button({ value, onClick, ...rest }) {
	return (
		<>
			<button onClick={onClick} {...rest}>
				{value}
			</button>
		</>
	);
}
