import { useState } from "react";

const Login = () => {
	const [isLogin, setIsLogin] = useState<boolean>(false);

	const handleLogin = () => {
		setIsLogin(true);
	};

	const handleLogout = () => {
		setIsLogin(false);
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>

			<div>User is {isLogin ? "logged in" : "not logged in"}</div>
		</div>
	);
};
export default Login;
