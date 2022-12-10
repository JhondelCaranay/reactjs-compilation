import { useState } from "react";
import "./App.css";
import ReactPaginate from "react-paginate";
import JsonData from "./MOCK_DATA.json";

type UserType = {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
};

function App() {
	const [users, setUsers] = useState<UserType[]>(JsonData.slice(0, 200));

	const [pageNumber, setPageNumber] = useState<number>(0);

	const usersPerPage: number = 10;
	const pagesVisited: number = pageNumber * usersPerPage; // 0 * 10 = 0 , 4 * 10 = 40

	const displayUsers: UserType[] = users.slice(pagesVisited, pagesVisited + usersPerPage); // 0, 10 | 40, 50

	const pageCount: number = Math.ceil(users.length / usersPerPage); // 100 / 10 = 10

	const changePage = ({ selected }: { selected: number }) => {
		setPageNumber(selected);
	};

	return (
		<div className="container mx-auto  px-4 py-4">
			<table className="w-full table-auto border bg-[#0e1922] text-left text-white">
				<thead>
					<tr className="text-lg">
						{["ID", "First Name", "Last Name", "Email", "Password"].map((title) => (
							<th key={title} className="border-2 border-sky-500 py-2 px-4 uppercase">
								{title}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{displayUsers.map((user) => (
						<tr key={user.id} className=" text-sm even:bg-slate-700 hover:bg-slate-600">
							<td className="border-2 border-sky-500 p-5">{user.id}</td>
							<td className="border-2 border-sky-500 p-5">{user.firstName}</td>
							<td className="border-2 border-sky-500 p-5">{user.lastName}</td>
							<td className="border-2 border-sky-500 p-5">{user.email}</td>
							<td className="border-2 border-sky-500 p-5">{user.password}</td>
						</tr>
					))}
				</tbody>
			</table>
			<ReactPaginate
				previousLabel={"Previous"}
				nextLabel={"Next"}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={"paginationBttns"}
				// previousClassName={"previous"}
				previousLinkClassName={"previousBttn"}
				// pageLinkClassName={"pageBttn"}
				// nextClassName={"next"}
				// nextLinkClassName={"nextBttn"}
				disabledClassName={"paginationDisabled"}
				activeClassName={"paginationActive animate-bounce"}
			/>
		</div>
	);
}

export default App;
