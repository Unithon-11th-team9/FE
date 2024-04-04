type InputProps = { label?: string } & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, ...props }: InputProps) {
	return (
		<div>
			{label && <label>{label}</label>}
			<input {...props} />
		</div>
	);
}
