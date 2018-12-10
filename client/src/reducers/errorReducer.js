import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";
const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case GET_ERRORS:
      return {};
    default:
      return state;
  }
}
