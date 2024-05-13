import { ACTIONS } from './actions.config';
const HOST_URL = `https://5fd48a0a-ace9-48ec-a835-07f1abccf3a4-00-3l4ms0w1xvxfi.worf.replit.dev/api`;

const fetchExerciseTypes = () => async (dispatch) => {
  try {
    dispatch({ type: ACTIONS.FETCH_DATA_LOADING });
    const response = await fetch(HOST_URL + `/exercise-types`);
    let data = [];
    if (response.status === 200) {
      data = await response.json();
    }
    dispatch({ type: ACTIONS.FETCH_EXERCISE_TYPES_SUCCESS, payload: data })
  } catch (error) {
    console.error('Error fetching exerciseTypes')
    dispatch({ type: ACTIONS.FETCH_EXERCISE_TYPES_FAILURE })
  }
}

const fetchExercises = () => async (dispatch) => {
  try {
    dispatch({ type: ACTIONS.FETCH_DATA_LOADING });
    const response = await fetch(HOST_URL + `/exercises`);
    let data = [];
    if (response.status === 200) {
      data = await response.json();
    }
    dispatch({ type: ACTIONS.FETCH_EXERCISES_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error fetching exercises data:', error);
    dispatch({ type: ACTIONS.FETCH_EXERCISES_FAILURE });
  }
};

const fetchFoods = () => async (dispatch) => {
  try {
    dispatch({ type: ACTIONS.FETCH_DATA_LOADING });
    const response = await fetch(HOST_URL + `/foods`);
    let data = [];
    if (response.status === 200) {
      data = await response.json();
    }
    dispatch({ type: ACTIONS.FETCH_FOOD_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error fetching foods data:', error);
    dispatch({ type: ACTIONS.FETCH_FOOD_FAILURE });
  }
};

const fetchGoals = () => async (dispatch) => {
  try {
    dispatch({ type: ACTIONS.FETCH_DATA_LOADING });
    const response = await fetch(HOST_URL + `/goals`);
    let data = [];
    if (response.status === 200) {
      data = await response.json();
    }
    dispatch({ type: ACTIONS.FETCH_GOALS_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error fetching Goals data:', error);
    dispatch({ type: ACTIONS.FETCH_GOALS_FAILURE });
  }
};

const removeExercise = (exerciseId) => async (dispatch) => {
  try {
    const response = await fetch(HOST_URL + `/exercises/${exerciseId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // const data = response.json();
    if (response.status === 204) {
      console.log(response, 'remove ex');
      dispatch({
        type: ACTIONS.REMOVE_EXERCISE_SUCCESS,
        payload: { exerciseId }
      });
    }
  } catch (error) {
    console.error('Error removing exercise:', error);
    dispatch({ type: ACTIONS.REMOVE_EXERCISE_FAILURE });
  }
};

const removeFood = (foodId) => async (dispatch) => {
  try {
    const response = await fetch(HOST_URL + `/foods/${foodId}`, {
      method: 'DELETE'
    });
    if (response.status === 204) {
      dispatch({ type: ACTIONS.REMOVE_FOOD_SUCCESS, payload: { foodId } });
    }
  } catch (error) {
    console.error('Error removing food:', error);
    dispatch({ type: ACTIONS.REMOVE_FOOD_FAILURE });
  }
};

const removeGoal = (goalId) => async (dispatch) => {
  try {
    const response = await fetch(HOST_URL + `/goals/${goalId}`, {
      method: 'DELETE'
    });
    if (response.status === 204) {
      dispatch({ type: ACTIONS.REMOVE_GOAL_SUCCESS, payload: { goalId } });
    }
  } catch (error) {
    console.error('Error removing goal:', error);
    dispatch({ type: ACTIONS.REMOVE_GOAL_FAILURE });
  }
};

const addExercise = (exerciseData) => async (dispatch) => {
  try {
    const response = await fetch(HOST_URL + `/exercises`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(exerciseData)
    });
    let data = {};
    if (response.status === 201) {
      data = await response.json();
    }
    dispatch({ type: ACTIONS.ADD_EXERCISE_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error adding exercise:', error);
    dispatch({ type: ACTIONS.ADD_EXERCISE_FAILURE });
  }
};

const addFood = (foodData) => async (dispatch) => {
  try {
    const response = await fetch(HOST_URL + `/foods`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(foodData)
    });
    let data = {};
    if (response.status === 201) {
      data = await response.json();
    }
    dispatch({ type: ACTIONS.ADD_FOOD_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error adding food:', error);
    dispatch({ type: ACTIONS.ADD_FOOD_FAILURE });
  }
};

const addGoal = (goalData) => async (dispatch) => {
  try {
    const response = await fetch(HOST_URL + `/goals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(goalData)
    });
    let data = {};
    if (response.status === 201) {
      data = await response.json();
    }
    dispatch({ type: ACTIONS.ADD_GOAL_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error adding goal:', error);
    dispatch({ type: ACTIONS.ADD_GOAL_FAILURE });
  }
};

export {
  fetchExercises,
  fetchFoods,
  fetchGoals,
  fetchExerciseTypes,
  removeExercise,
  removeFood,
  removeGoal,
  addExercise,
  addFood,
  addGoal
};
