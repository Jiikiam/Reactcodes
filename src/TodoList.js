import './App.css';
import React, { useState } from 'react';

function App() {
    const [desc, setDesc] = useState('');
    const [todos, setTodos] = useState([]);
    const [date, setDate] = useState('');

    const inputChanged = (event) => {
        setDesc(event.target.value);
    }
    const inputChange = (event) => {
        setDate(event.target.value);
    }
    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, desc + " " + date]);
    }
    return (

        <div className="App">
            <form onSubmit={addTodo}>
                <p>Description:<input type="text" onChange={inputChanged} value={desc} /> Date: <input type="text" onChange={inputChange} value={date} /></p>
                <button onClick="addTodo">Add</button>
            </form>
            <table>
                <tbody>
                    <p>Date Description</p>
                    {
                        todos.map((todo, index) =>
                            <tr key={index}>
                                <td>{todo}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App;