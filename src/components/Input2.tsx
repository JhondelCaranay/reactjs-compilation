type Props = {
	value: string;
	setValue: (value: string) => void;
};

const Input2 = ({ value, setValue }: Props) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<div>
			<input type="text" value={value} onChange={handleChange} />
		</div>
	);
};
export default Input2;
