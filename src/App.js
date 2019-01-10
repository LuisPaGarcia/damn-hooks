import React, { useState } from 'react';

const Example = () => {
	// Declare a new state variable, which we'll call "count"
	const [ count, setCount ] = useState(0);
	const [ age, setAge ] = useState(42);
	const [ fruit, setFruit ] = useState('banana');
	const [ todos, setTodos ] = useState([ { text: 'Learn Hooks' } ]);
	const [ todo, setTodo ] = useState('');

	const addTodo = (text) => {
		const newTodos = [ ...todos, { text } ];
		setTodos(newTodos);
		setTodo('')
	};

	return (
		<div style={{ margin: '40px' }}>
			<h1>Hooks in react!</h1>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>

			<p>You clicked {age} times</p>
			<button onClick={() => setAge(age + 1)}>Click me</button>

			<p>The fruit is {fruit}</p>
			<input type="text" value={fruit} onChange={(e) => setFruit(e.target.value)} />

			<p>List of Todos</p>
			<ul>{todos.map((t, i) => <li key={`${t}-${i}`}>{t.text}</li>)}</ul>
			<input
				type="text"
				value={todo}
				onChange={(e) => {
					setTodo(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					addTodo(todo);
				}}
			>
				Add todo
			</button>
		</div>
	);
};

export default Example;
