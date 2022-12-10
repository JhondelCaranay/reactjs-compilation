type Props = {
	name: string;
	count: number;
	isLogin: boolean;
};

const Greet = ({ name, count, isLogin }: Props) => {
	const message = isLogin ? (
		<h1>
			Welcome {name}, you have {count} messages
		</h1>
	) : (
		<h1>Welcome guest</h1>
	);

	return <div>{message}</div>;
};
export default Greet;
