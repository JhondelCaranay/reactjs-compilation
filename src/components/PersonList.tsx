type Name = {
	id: number;
	name: string;
};

type Props = {
	names: Name[];
};

const PersonList = ({ names }: Props) => {
	return (
		<div>
			<h1>Person List</h1>
			{names.map((name) => (
				<h2 key={name.id}>{name.name}</h2>
			))}
		</div>
	);
};
export default PersonList;
