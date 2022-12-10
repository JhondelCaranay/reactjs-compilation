type Props = {
	handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = ({ handleClick }: Props) => {
	return (
		<div>
			<button onClick={(event) => handleClick(event, 10)}>Click me</button>
		</div>
	);
};
export default Button;
