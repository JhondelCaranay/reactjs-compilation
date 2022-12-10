import React from "react";
import Greet from "../Greet";

export const CustomComponent = ({ name, isLogin, count }: React.ComponentProps<typeof Greet>) => {
	return (
		<div>
			<ul>
				<li>Name: {name}</li>
				<li>Is Login: {isLogin ? "Yes" : "No"}</li>
				<li>Count: {count}</li>
			</ul>
		</div>
	);
};
