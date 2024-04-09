
import React, { useState } from 'react';
import "./habit.css"

function Habit() {
    const [habits, setHabits] = useState([]);
    const [whatTodo, setWhatTodo] = useState('');
    const [whereTodo, setWhereTodo] = useState('');
    const [whyTodo, setWhyTodo] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!whatTodo || !whereTodo || !whyTodo || !date) {
            setError('Please fill in all fields.');
            return;
        }

        const habit = `${whatTodo}  ${whereTodo}  ${whyTodo}  ${date}`;
        setHabits([...habits, habit]);


        setWhatTodo('');
        setWhereTodo('');
        setWhyTodo('');
        setDate('');
        setError('');
    };
    function handleDelete(index) {
        const updatedHabits = habits.filter((habit, i) => i !== index);
        setHabits(updatedHabits);
    }

    return (
        <div>
            <div className="container">
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="What to do"
                        className='display'
                        value={whatTodo}
                        onChange={(e) => setWhatTodo(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Where to do"
                        value={whereTodo}
                        className='display'
                        onChange={(e) => setWhereTodo(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Why to do"
                        value={whyTodo}
                        className='display'
                        onChange={(e) => setWhyTodo(e.target.value)}
                    />
                    <input
                        type="date"
                        value={date}
                        className='displaydate'
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <button className='savebtn' type="submit">Add Habit</button>
                </form>
                <h1 style={{ textAlign: "center" }}>Habits</h1>

                <div className="habit-list">

                    <ul>
                        {habits.map((habit, index) => (
                            <li key={index}>
                                {habit}
                                <button type='button' className='deletebtn' onClick={() => handleDelete(index)}>Delete</button>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Habit;


