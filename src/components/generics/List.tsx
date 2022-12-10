type ListProps<T> = {
	items: T[];
	onClick: (value: T) => void;
};

type Person = {
	id: number;
	first: string;
	last: string;
};

// export const ListGenerics = <T extends string | number>({ items, onClick }: ListProps<T>) => {
export const ListGenerics = <T extends Person>({ items, onClick }: ListProps<T>) => {
	return (
		<div>
			<h2>List of items</h2>
			{items.map((item) => {
				return (
					<div key={item.id} onClick={() => onClick(item)}>
						{item.first} {item.last}
					</div>
				);
			})}

			{/* {items.map((item) => {
				return (
					<div key={item} onClick={() => onClick(item)}>
						{item}
					</div>
				);
			})} */}
		</div>
	);
};
