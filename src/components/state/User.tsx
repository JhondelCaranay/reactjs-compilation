import { useState } from "react";

type AuthUser = {
	name: string;
	email: string;
};

const User = () => {
	const [user, setUser] = useState<AuthUser | null>(null);

	const handleLogin = () => {
		setUser({
			name: "John",
			email: "john@gmail.com",
		});
	};

	const handleLogout = () => {
		setUser(null);
	};
	console.log({ user });
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>

			<h1> Name {user ? user.name : "Guest"}</h1>
			<h1> Email {user ? user.email : "Guest"}</h1>

			<h1>Name {user?.name}</h1>
		</div>
	);
};

export const UserTypeAssertion = () => {
	// Assertion
	const [user, setUser] = useState({} as AuthUser);
	console.log(user);

	const handleLogin = () => {
		setUser({
			name: "John",
			email: "john@gmail.com",
		});
	};

	return (
		<div style={{ backgroundColor: "lightblue" }}>
			<button onClick={handleLogin}>Login</button>

			<h1>Name {user.name}</h1>
			<h1>Name {user.name}</h1>
		</div>
	);
};
export default User;
