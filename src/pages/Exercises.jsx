import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExercises, removeExercise } from '../reducer/actions';

const Exercises = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);

  const handleRemoveExercise = (e) => {
    e.preventDefault();
    dispatch(removeExercise(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  return (
    <div>
      <h1>Exercises</h1>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise._id}>
            {exercise.exerciseType.exercise}-{exercise.durationInMinutes}-
            {exercise.caloriesBurned}
            <button value={exercise._id} onClick={handleRemoveExercise}>
              Remove Exercise
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Exercises;
