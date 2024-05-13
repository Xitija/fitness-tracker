import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFoods, removeFood } from '../reducer/actions';

const Foods = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.foods);

  const handleRemoveFood = (e) => {
    e.preventDefault();
    dispatch(removeFood(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  console.log(foods);

  return (
    <div>
      <h1>Foods</h1>
      <table>
        <thead>
          <tr>
            <td>Food name</td>
            <td>Calories</td>
            <td>Protein</td>
            <td>Carbs</td>
            <td>Fat</td>
          </tr>
        </thead>
        <tbody>
          {foods.map(({ _id, foodName, calories, protein, carbs, fat }) => (
            <tr key={_id}>
              <td>{foodName}</td>
              <td>{calories}</td>
              <td>{protein}</td>
              <td>{carbs}</td>
              <td>{fat}</td>
              <td>
                <button value={_id} onClick={handleRemoveFood}>
                  Remove Food
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Foods;
