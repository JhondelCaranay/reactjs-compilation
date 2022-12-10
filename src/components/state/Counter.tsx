import { useReducer } from "react";

type UpdateAcction = {
	type: "increment" | "decrement";
	payload: number;
};

type ResetAction = {
	type: "reset";
};

type CounterState = {
	counter: number;
};

type CounterAction = UpdateAcction | ResetAction;

const initialState: CounterState = {
	counter: 0,
};

const reducer = (state: CounterState, action: CounterAction) => {
	switch (action.type) {
		case "increment":
			return { counter: state.counter + action.payload };
		case "decrement":
			return { counter: state.counter - action.payload };
		case "reset":
			return initialState;
		default:
			return state;
	}
};

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<h1>Counter: {state.counter}</h1>
			<button onClick={() => dispatch({ type: "increment", payload: 1 })}>Increment</button>
			<button onClick={() => dispatch({ type: "decrement", payload: 1 })}>Decrement</button>
			<button onClick={() => dispatch({ type: "reset" })}>Reset</button>
		</div>
	);
};
export default Counter;
