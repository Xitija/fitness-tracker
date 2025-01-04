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
      <table>
        <thead>
          <tr>
            <td>
              <b>Goal name</b>
            </td>
            <td>
              <b>Description</b>
            </td>
            <td>
              <b>Target Date</b>
            </td>
            <td>
              <b>Target Calories</b>
            </td>
            <td>
              <b>Actions</b>
            </td>
          </tr>
        </thead>
        <tbody>
          {goals.map(
            ({
              _id,
              goalName,
              goalDescription,
              targetDate,
              targetCalories
            }) => (
              <tr key={_id}>
                <td>{goalName}</td>
                <td>{goalDescription}</td>
                <td>{targetDate}</td>
                <td>{targetCalories}</td>
                <td>
                  <button value={_id} onClick={handleRemoveGoal}>
                    Remove Goal
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Goals;
