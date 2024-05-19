import { Route, Link, Routes } from 'react-router-dom';
import { FaGithubSquare } from "react-icons/fa";
import { FaServer } from "react-icons/fa6";
import './App.css';
import Exercises from './pages/Exercises';
import Foods from './pages/Foods';
import Goals from './pages/Goals';
import ExerciseForm from './pages/ExerciseForm';
import FoodForm from './pages/FoodForm';
import GoalForm from './pages/GoalForm';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">Fitness Tracker</div>
        <nav>
          <Link className="link" to="/dashboard">Dashboard</Link>
          <Link className="link" to="/exercises">Exercises</Link>
          <Link className="link" to="/foods">Foods</Link>
          <Link className="link" to="/goals">Goals</Link>
          <Link className="link" to="/add-exercise">Add Exercise</Link>
          <Link className="link" to="/add-food">Add Food</Link>
          <Link className="link" to="/add-goal">Add Goal</Link>
          <a className="link" target="_blank" href="https://github.com/Xitija/fitness-tracker"><FaGithubSquare size={30} /></a>
          <a className="link" target="_blank" href="https://replit.com/@xitija/Assignment-17"><FaServer size={30} /></a>

        </nav>
      </div>
      <div className="container">
        <Routes>
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/foods" element={<Foods />} />
          <Route path="/goals" element={<Goals />} />
          <Route path='/add-exercise' element={<ExerciseForm />} />
          <Route path='/add-food' element={<FoodForm />} />
          <Route path='/add-goal' element={<GoalForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
