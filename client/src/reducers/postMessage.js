import { CREATE, FETCH_ALL, UPDATE, DELETE } from "../actions/actionsTypes";

const initialState = {
  list: []
};
//postMessage.list
export const postMessage = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        list: [...action.payload]
      };
    case CREATE:
      return {
        ...state,
        list: [...state.list, action.payload]
      };
    case UPDATE:
      return {
        ...state,
        list: state.list.map(x =>
          x._id == action.payload._id ? action.payload : x
        )
      };

    case DELETE:
      return {
        ...state,
        list: state.list.filter(x => x._id != action.payload)
      };

    default:
      return state;
  }
};
