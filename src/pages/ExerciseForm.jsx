import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addExercise, fetchExerciseTypes } from '../reducer/actions';

const ExerciseForm = () => {
  const dispatch = useDispatch();

  const [exerciseType, setExerciseType] = useState({});

  const [durationInMinutes, setDurationInMinutes] = useState(0);

  const handleAddExercise = (e) => {
    e.preventDefault();
    console.log(exerciseType._id, durationInMinutes);
    const duration = parseInt(durationInMinutes);
    if (exerciseType?._id?.length || duration) {
      dispatch(
        addExercise({ exerciseType: exerciseType._id, durationInMinutes })
      );
    }
    setDurationInMinutes('0');
    setExerciseType({ exercise: '' });
  };

  const exerciseTypes = useSelector((state) => state.exerciseTypes);

  console.log(JSON.stringify(exerciseType), 'Ext');
  useEffect(() => {
    dispatch(fetchExerciseTypes());
  }, [dispatch]);

  return (
    <div>
      <h1>Add New Exercise</h1>
      <fieldset>
        <form>
          <div>
            <label>Select Exercise Type:</label>
            <select
              // value={exerciseType.exercise}
              onChange={(e) => setExerciseType(JSON.parse(e.target.value))}
            >
              <option>Select exercise type</option>
              {exerciseTypes.map((exType) => (
                <option key={exType._id} value={JSON.stringify(exType)}>
                  {exType.exercise}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Calories Per Minute:</label>
            <label>{exerciseType.caloriesPerMinute}</label>
          </div>
          <div>
            <label>Enter duration in minutes:</label>
            <input
              value={durationInMinutes}
              type="number"
              onChange={(e) => setDurationInMinutes(e.target.value)}
            />
          </div>
          <button onClick={handleAddExercise}>Add Exercise</button>
        </form>
      </fieldset>
    </div>
  );
};

export default ExerciseForm;
