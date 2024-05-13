import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFood } from '../reducer/actions';

const FoodForm = () => {
  const dispatch = useDispatch();

  const initialState = {
    foodName: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: ''
  };
  const [food, setFood] = useState(initialState);

  const handleAddFood = (e) => {
    e.preventDefault();
    console.log(food);
    const calories = parseFloat(food.calories);
    const protein = parseFloat(food.protein);
    const carbs = parseFloat(food.carbs);
    const fat = parseFloat(food.fat);
    const foodName = food.foodName.trim();
    if (foodName.length || calories || protein || carbs || fat) {
      dispatch(addFood({ foodName, calories, protein, carbs, fat }));
    }
    setFood(initialState);
  };

  return (
    <div>
      <h1>Add New Food</h1>
      <form>
        <div>
          <label>Enter food name:</label>
          <input
            value={food.foodName}
            type="text"
            onChange={(e) => setFood({ ...food, foodName: e.target.value })}
          />
        </div>
        <div>
          <label>Calories:</label>
          <input
            value={food.calories}
            type="number"
            onChange={(e) => setFood({ ...food, calories: e.target.value })}
          />
        </div>
        <div>
          <label>Protein:</label>
          <input
            value={food.protein}
            type="number"
            onChange={(e) => setFood({ ...food, protein: e.target.value })}
          />
        </div>
        <div>
          <label>Carbs:</label>
          <input
            value={food.carbs}
            type="number"
            onChange={(e) => setFood({ ...food, carbs: e.target.value })}
          />
        </div>
        <div>
          <label>Fat:</label>
          <input
            value={food.fat}
            type="number"
            onChange={(e) => setFood({ ...food, fat: e.target.value })}
          />
        </div>
        <button onClick={handleAddFood}>Add Food</button>
      </form>
    </div>
  );
};

export default FoodForm;
