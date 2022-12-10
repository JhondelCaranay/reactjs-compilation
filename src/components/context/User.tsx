import { useContext } from "react";
import { UserContext } from "./UserContext";

const User2 = () => {
	// const userContext = useContext(UserContext)!; //using non-null assertion operator
	const userContext = useContext(UserContext);

	const handleLogin = () => {
		if (userContext) {
			userContext.setUser({
				name: "John",
				email: "jhon@gmail.com",
			});
		}

		// userContext!.setUser({
		// 	name: "John Doe",
		// 	email: "jd@gmail.comn",
		// });
	};

	const handleLogout = () => {
		userContext!.setUser(null);
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>

			<h1> Name {userContext?.user?.name ? userContext.user.name : "Guest"}</h1>
			<h1> Email {userContext?.user?.email ? userContext.user.email : "Guest"}</h1>
		</div>
	);
};

export default User2;
