type Props = {
	children: React.ReactNode;
};

const Oscar = ({ children }: Props) => {
	return (
		<div>
			<h1>Oscar is mine!</h1>
			{children}
		</div>
	);
};
export default Oscar;
