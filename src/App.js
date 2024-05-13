import { Route, Link, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Exercises from './pages/Exercises';
import Foods from './pages/Foods';
import Goals from './pages/Goals';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/exercises">Exercises</Link>
        <Link to="/foods">Foods</Link>
        <Link to="/goals">Goals</Link>
      </nav>
      <Routes>
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </div>
  );
}

export default App;
