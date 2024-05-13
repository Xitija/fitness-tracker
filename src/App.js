import { Route, Link, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Exercises from './pages/Exercises';
import Foods from './pages/Foods';
import Goals from './pages/Goals';
import ExerciseForm from './pages/ExerciseForm';
import FoodForm from './pages/FoodForm';
import GoalForm from './pages/GoalForm';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/exercises">Exercises</Link>
        <Link to="/foods">Foods</Link>
        <Link to="/goals">Goals</Link>
        <Link to="/add-exercise">Add Exercise</Link>
        <Link to="/add-food">Add Food</Link>
        <Link to="/add-goal">Add Goal</Link>
      </nav>
      <Routes>
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/goals" element={<Goals />} />
        <Route path='/add-exercise' element={<ExerciseForm />} />
        <Route path='/add-food' element={<FoodForm />} />
        <Route path='/add-goal' element={<GoalForm />} />
      </Routes>
    </div>
  );
}

export default App;
