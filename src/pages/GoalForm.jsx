import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addGoal } from '../reducer/actions';

const GoalForm = () => {
  const dispatch = useDispatch();

  const initialState = {
    goalName: '',
    goalDescription: '',
    targetDate: '',
    targetCalories: '',
    status: 'In Progress'
  };

  const [goal, setGoal] = useState(initialState);

  const handleAddGoal = (e) => {
    e.preventDefault(initialState);
    console.log(goal, 'kjk', goal.status.length);
    const targetCalories = parseFloat(goal.targetCalories);
    const goalName = goal.goalName.trim();
    if (
      goalName.length ||
      targetCalories ||
      goal.targetDate ||
      goal.status.length > 0
    ) {
      dispatch(
        addGoal({
          goalName,
          goalDescription: goal.goalDescription,
          targetDate: goal.targetDate,
          targetCalories,
          status: goal.status
        })
      );
    }
    setGoal(initialState);
  };

  return (
    <div>
      <h1>Add New Food</h1>
      <form>
        <div>
          <label>Enter Goal name:</label>
          <input
            value={goal.goalName}
            type="text"
            onChange={(e) => setGoal({ ...goal, goalName: e.target.value })}
          />
        </div>
        <div>
          <label>Enter Goal description:</label>
          <input
            value={goal.goalDescription}
            type="text"
            onChange={(e) =>
              setGoal({ ...goal, goalDescription: e.target.value })
            }
          />
        </div>
        <div>
          <label>Target Calories:</label>
          <input
            value={goal.targetCalories}
            type="number"
            onChange={(e) =>
              setGoal({ ...goal, targetCalories: e.target.value })
            }
          />
        </div>
        <div>
          <label>Target Date:</label>
          <input
            value={goal.targetDate}
            type="date"
            onChange={(e) => setGoal({ ...goal, targetDate: e.target.value })}
          />
        </div>
        <div>
          <label>Goal Status: </label>
          <select
            value={goal.status}
            onChange={(e) => setGoal({ ...goal, status: e.target.value })}
          >
            <option value="In Progress">In Progress</option>
            <option value="Achieved">Achieved</option>
            <option value="Abandoned">Abandoned</option>
          </select>
        </div>
        <button onClick={handleAddGoal}>Add Goal</button>
      </form>
    </div>
  );
};

export default GoalForm;
