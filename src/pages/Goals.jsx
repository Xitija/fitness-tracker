import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoals, removeGoal } from '../reducer/actions';

const Goals = () => {
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goals);

  const handleRemoveGoal = (e) => {
    e.preventDefault();
    dispatch(removeGoal(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  // make card , show achieved percentage
  return (
    <div>
      <h1>Goals</h1>
      <ul>
        {goals.map(
          ({ _id, goalName, goalDescription, targetDate, targetCalories }) => (
            <li key={_id}>
              {goalName}-{goalDescription}-{targetDate}-{targetCalories}
              <button value={_id} onClick={handleRemoveGoal}>
                Remove Goal
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Goals;
