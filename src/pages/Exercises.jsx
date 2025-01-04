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
      <table>
        <thead>
          <tr>
            <td>
              <b>Exercise Type</b>
            </td>
            <td>
              <b>Duration(In Minutes)</b>
            </td>
            <td>
              <b>Calories Burned</b>
            </td>
            <td>
              <b>Action</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise) => (
            <tr key={exercise._id}>
              <td>{exercise.exerciseType.exercise}</td>
              <td>{exercise.durationInMinutes}</td>
              <td>{exercise.caloriesBurned}</td>
              <td>
                <button value={exercise._id} onClick={handleRemoveExercise}>
                  Remove Exercise
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Exercises;
