export default function Button({ variant = 'button', ...props }) {
	return <button className={variant} {...props} />;
}
