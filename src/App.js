//@ts-check
'use strinct';

import React, { useState, useEffect, useReducer } from 'react';
const PLUS = 'PLUS',
	MINUS = 'MINUS';
const counterReducer = (count, event) => {
	switch (event.type) {
		case PLUS:
			return count + 1;
		case MINUS:
			return count - 1;
		default:
			break;
	}
};

const Example = () => {
	const [ count, setCount ] = useState(0);
	const [ age, setAge ] = useState(42);
	const [ fruit, setFruit ] = useState('banana');
	const [ todos, setTodos ] = useState(
		JSON.parse(window.sessionStorage.getItem('todos')) || [ { text: 'Learn Hooks' } ]
	);
	const [ todo, setTodo ] = useState('');
	const [ value, setValue ] = useReducer(counterReducer, 0);

	const addTodo = (text) => {
		const newTodos = [ ...todos, { text } ];
		setTodos(newTodos);
		setTodo('');
		window.sessionStorage.setItem('todos', JSON.stringify(newTodos));
	};

	useEffect(() => {
		document.title = fruit + ' ' + todos.length;
	});

	return (
		<div style={{ margin: '40px' }}>
			<h1>Hooks in react!</h1>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>

			<p>You clicked {age} times</p>
			<button onClick={() => setAge(age + 1)}>Click me</button>

			<p>Using reducers!</p>
			<p>
				<button onClick={() => setValue({ type: 'MINUS' })}>-</button> {value}{' '}
				<button onClick={() => setValue({ type: 'PLUS' })}>+</button>
			</p>

			<p>The fruit is {fruit}</p>
			<input type="text" value={fruit} onChange={(e) => setFruit(e.target.value)} />

			<p>List of Todos</p>
			<p>
				<input
					type="text"
					value={todo}
					onChange={(e) => {
						setTodo(e.target.value);
					}}
					onKeyDown={({ keyCode, target: { value } }) => {
						if (keyCode === 13 && value !== '') {
							addTodo(value);
						}
					}}
				/>
				<button
					onClick={() => {
						addTodo(todo);
					}}
				>
					Add todo
				</button>
			</p>
			<ul>{todos.map((t, i) => <li key={`${t}-${i}`}>{t.text}</li>)}</ul>
		</div>
	);
};

export default Example;
