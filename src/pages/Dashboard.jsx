import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoods, fetchExercises, fetchGoals } from '../reducer/actions';
import ProgressBar from '@ramonak/react-progress-bar';
/* 
Total Calories Burned exer
Total Calories Consumed food
Total Calories Goal goal
Remaining Calories to Goal
*/

const Dashboard = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods);
  const exercises = useSelector((state) => state.exercises);
  const goals = useSelector((state) => state.goals);

  useEffect(() => {
    dispatch(fetchExercises());
    dispatch(fetchFoods());
    dispatch(fetchGoals());
  }, [dispatch]);

  console.log(foods);
  console.log(exercises);
  console.log(goals);

  const totalCaloriesBurned = exercises.reduce(
    (acc, { caloriesBurned }) => acc + caloriesBurned,
    0
  );

  const totalCaloriesConsumed = foods.reduce(
    (acc, { calories }) => acc + calories,
    0
  );

  const totalCaloriesToAchieve = goals.reduce(
    (acc, { targetCalories, status }) =>
      status === 'In Progress' ? acc + targetCalories : acc,
    0
  );

  const remainingCaloriesToGoal = totalCaloriesToAchieve - totalCaloriesBurned;

  const remianingGoalPercentage = Math.ceil(
    (totalCaloriesBurned / totalCaloriesToAchieve) * 100
  );
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Total Calories Burned: {totalCaloriesBurned}</h2>
      <h2>Total Calories Consumed: {totalCaloriesConsumed}</h2>
      <h2>Total Calories Goal: {totalCaloriesToAchieve}</h2>
      <h2>Remaining Calories to Goal: {remainingCaloriesToGoal}</h2>
      <ProgressBar completed={remianingGoalPercentage} />
    </div>
  );
};

export default Dashboard;
// https://agencyanalytics.com/blog/master-goals

// if (!user) {
//   dispatch(fetchUser(1));
// }