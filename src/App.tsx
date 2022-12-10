import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import GreetOptionalProps from "./components/GreetOptionalProps";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Input2 from "./components/Input2";
import Oscar from "./components/Oscar";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
	const [name, setName] = useState<string>("");
	const [word, setWord] = useState<string>("");

	// mouse click event handler
	const clicked = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
		console.log("Button clicked", id);
	};

	// input change event handler
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
	};

	const person = {
		name: "John",
		age: 30,
	};

	const names = [
		{
			id: 1,
			name: "John",
		},
		{
			id: 2,
			name: "Jane",
		},
		{
			id: 3,
			name: "Bob",
		},
	];

	return (
		<div className="App">
			<p className="red">typing props</p>
			<Greet name={"jhondel"} count={11} isLogin={true} />
			<hr />
			<p className="red">typing object props</p>
			<Person person={person} />
			<hr />
			<p className="red">typing list of objects props</p>
			<PersonList names={names} />
			<hr />
			<p className="red">advance props</p>
			<Status status="loading" />
			<hr />
			<p className="red">children props</p>
			<Heading>Place holder Text</Heading>
			<hr />
			<p className="red">children props with jsx</p>
			<Oscar>
				<Heading>Place holder Text</Heading>
			</Oscar>
			<hr />
			<p className="red">optional type</p>
			<GreetOptionalProps name={"jhondel"} isLogin={true} />
			<hr />
			<p className="red">event props Click event , mouse click event</p>
			<Button handleClick={clicked} />
			<hr />
			<p className="red">event props Change event , input change event</p>
			<Input value={name} handleChange={handleChange} />
			<hr />
			<p className="red">event props Change event</p>
			<Input2 value={word} setValue={setWord} />
			<hr />
			<p className="red">styles props</p>
			<Container
				styles={{
					backgroundColor: "red",
					color: "white",
				}}
			/>
		</div>
	);
}

export default App;
