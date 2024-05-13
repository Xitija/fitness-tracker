import { ACTIONS } from './actions.config';
const initialState = {
  exercises: [],
  foods: [],
  goals: [],
  loading: false,
  error: null
};

const fitnessTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA_LOADING:
      return {
        ...state,
        loading: true
      };
    case ACTIONS.FETCH_EXERCISES_SUCCESS:
      return {
        ...state,
        exercises: action.payload,
        loading: false,
        error: null
      };
    case ACTIONS.FETCH_EXERCISES_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error fetching Exercises data'
      };
    case ACTIONS.FETCH_FOOD_SUCCESS:
      return {
        ...state,
        foods: action.payload,
        loading: false,
        error: null
      };
    case ACTIONS.FETCH_FOOD_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error fetching Foods data'
      };
    case ACTIONS.FETCH_GOALS_SUCCESS:
      return {
        ...state,
        goals: action.payload,
        loading: false,
        error: null
      };
    case ACTIONS.FETCH_GOALS_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error fetching Goals data'
      };
    case ACTIONS.REMOVE_EXERCISE_SUCCESS:
      console.log(action.payload.exerciseId);
      const remainingExercises = state.exercises.filter(
        ({ _id }) => _id !== action.payload.exerciseId
      );
      return {
        ...state,
        exercises: [...remainingExercises]
      };
    case ACTIONS.REMOVE_EXERCISE_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error removing Exercise'
      };
    case ACTIONS.REMOVE_FOOD_SUCCESS:
      const remainingFoods = state.foods.filter(
        ({ _id }) => _id !== action.payload.foodId
      );
      return {
        ...state,
        foods: [...remainingFoods]
      };
    case ACTIONS.REMOVE_FOOD_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error removing Food'
      };
    case ACTIONS.REMOVE_GOAL_SUCCESS:
      const remainingGoals = state.goals.filter(
        ({ _id }) => _id !== action.payload.goalId
      );
      return {
        ...state,
        goals: [...remainingGoals]
      };
    case ACTIONS.REMOVE_GOAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error removing Goal'
      };
    case ACTIONS.ADD_EXERCISE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        exercises: [...state.exercises, action.payload]
      };
    case ACTIONS.ADD_FOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        foods: [...state.foods, action.payload]
      };
    case ACTIONS.ADD_GOAL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        goals: [...state.goals, action.payload]
      };
    case ACTIONS.ADD_EXERCISE_FAILURE:
    case ACTIONS.ADD_FOOD_FAILURE:
    case ACTIONS.ADD_GOAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: 'Error fetching or adding data'
      };
    default:
      return state;
  }
};

export default fitnessTrackerReducer;
