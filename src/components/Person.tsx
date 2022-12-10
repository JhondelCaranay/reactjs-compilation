// type Props = {
// 	person: {
// 		name: string;
// 		age: number;
// 	};
// };

import { PersonProps as Props } from "../types/Person.type";

export const Person = ({ person }: Props) => {
	return (
		<div>
			<h1>Name: {person.name}</h1>
			<h2>Age: {person.age}</h2>
		</div>
	);
};
