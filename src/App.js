
import React, { useState } from 'react';
import Habit from './components/Habit';
import './App.css';

function App() {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };
  return (
    <div className="App">

        <Habit onAdd={addHabit} />
      
    </div>
  );
}

export default App;
