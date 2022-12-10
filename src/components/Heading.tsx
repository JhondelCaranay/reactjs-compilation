type Props = {
	children: string;
};

const Heading = ({ children }: Props) => {
	return (
		<div>
			<h2>{children}</h2>
		</div>
	);
};
export default Heading;
