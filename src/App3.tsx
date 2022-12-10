import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { ListGenerics } from "./components/generics/List";
import { CustomButton } from "./components/html/Button";
import { CustomComponent } from "./components/html/CustomComponent";
import { Text } from "./components/polymorphic/Text";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateLiterals/Toast";

const App3 = () => {
	return (
		<div className="App">
			<hr />
			<p className="red">Component props</p>
			<Private isLoggedIn={true} component={Profile} />
			<hr />
			<p className="red">Generic props</p>
			<ListGenerics
				// items={["Batman", "Superman", "Flash"]}
				items={[
					{
						id: 1,
						first: "Bruce",
						last: "Wayne",
					},
					{
						id: 2,
						first: "Clark",
						last: "Kent",
					},
					{
						id: 3,
						first: "Princess",
						last: "Diana",
					},
				]}
				onClick={(item) => console.log(item)}
			/>
			<hr />
			<p className="red">Restrict props</p>
			<RandomNumber value={10} isPositive />
			<hr />
			<p className="red">template literals and Exclude</p>
			<Toast position="center" />
			<hr />
			<p className="red">Wrapping html element</p>
			<CustomButton variant="primary" onClick={() => alert("clicked")}>
				Priamry Button
			</CustomButton>
			<hr />
			<p className="red">Extracting a Components Prop Types</p>
			<CustomComponent count={1} isLogin={true} name={"jhondel"} />

			<hr />
			<p className="red">Polymorphic Components</p>
			<Text size="lg" as="h1">
				Heading
			</Text>
			<Text size="md" as="p">
				Paragraph
			</Text>
			<Text size="sm" color="secondary" as="label" htmlFor="someId">
				Label
			</Text>
		</div>
	);
};
export default App3;
