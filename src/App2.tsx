import "./App.css";
import { CounterClass } from "./components/class/CounterClass";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import User2 from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import DomRef from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import Counter from "./components/state/Counter";
import Login from "./components/state/Login";
import User, { UserTypeAssertion } from "./components/state/User";

const App2 = () => {
	return (
		<div className="App">
			<hr />
			<p className="red">useState</p>
			<Login />
			<hr />
			<p className="red">useState Types</p>
			<User />
			<UserTypeAssertion />
			<hr />
			<p className="red">use reducer</p>
			<Counter />
			<hr />
			<p className="red">use context hook</p>
			<ThemeContextProvider>
				<Box />
			</ThemeContextProvider>
			<hr />
			<p className="red">use context hook future value</p>
			<UserContextProvider>
				<User2 />
			</UserContextProvider>
			<hr />
			<p className="red">use ref</p>
			<DomRef />
			<hr />
			<p className="red">use ref mutable ref</p>
			<MutableRef />
			<hr />
			<p className="red">class Component</p>
			<CounterClass message="message props" />
			<br />
			<br />
			<br />
		</div>
	);
};
export default App2;
