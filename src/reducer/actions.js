import { ACTIONS } from './actions.config';
const HOST_URL = `https://5fd48a0a-ace9-48ec-a835-07f1abccf3a4-00-3l4ms0w1xvxfi.worf.replit.dev/api`;

const fetchExercises = () => async (dispatch) => {
  try {
    dispatch({ type: ACTIONS.FETCH_DATA_LOADING });
    const response = await fetch(HOST_URL + `/exercises`);
    const data = await response.json();
    dispatch({ type: ACTIONS.FETCH_EXERCISES_SUCCESS, payload: data })
  } catch (error) {
    console.error("Error fetching exercises data");
    dispatch({ type: ACTIONS.FETCH_EXERCISES_FAILURE });
  }
};

const fetchFoods = () => async (dispatch) => {
  try {
    dispatch({ type: ACTIONS.FETCH_DATA_LOADING });
    const response = await fetch(HOST_URL + `/foods`);
    const data = await response.json();
    dispatch({ type: ACTIONS.FETCH_FOOD_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching foods data");
    dispatch({ type: ACTIONS.FETCH_FOOD_FAILURE });
  }
}

const fetchGoals = () => async (dispatch) => {
  try {
    dispatch({ type: ACTIONS.FETCH_DATA_LOADING });
    const response = await fetch(HOST_URL + `/goals`);
    const data = await response.json();
    dispatch({ type: ACTIONS.FETCH_GOALS_SUCCESS, payload: data })
  } catch (error) {
    console.error("Error fetching Goals data");
    dispatch({ type: ACTIONS.FETCH_GOALS_FAILURE })
  }
}

export { fetchExercises, fetchFoods, fetchGoals };