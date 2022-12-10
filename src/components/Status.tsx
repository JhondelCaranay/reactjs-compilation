type Props = {
	status: "loading" | "success" | "error";
};

const Status = ({ status }: Props) => {
	let message: string = "";

	if (status === "loading") {
		message = "Loading...";
	} else if (status === "success") {
		message = "Data fetched successfully";
	} else if (status === "error") {
		message = "Error fetching data";
	}

	return (
		<div>
			<h4>status - {message}</h4>
		</div>
	);
};
export default Status;
