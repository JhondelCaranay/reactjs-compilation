import { memo } from "react";

type Props = {
	name: string;
	count?: number;
	isLogin: boolean;
};

const GreetOptionalProps = ({ name, count = 0, isLogin }: Props) => {
	console.log({ count, type: typeof count });

	const message = isLogin ? (
		<h1>
			Welcome {name}, you have {count} messages
		</h1>
	) : (
		<h1>Welcome guest</h1>
	);

	return <div>{message}</div>;
};
export default memo(GreetOptionalProps);
