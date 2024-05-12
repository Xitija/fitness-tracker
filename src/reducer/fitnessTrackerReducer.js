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
        food: action.payload,
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
    default:
      return state;
  }
};

export default fitnessTrackerReducer;
