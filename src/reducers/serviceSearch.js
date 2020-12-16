import {SEARCH_SERVICE} from '../actions/actionTypes'

const initialState = {
  value: '',
};

export default function serviceSearchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SERVICE:
      const {value} = action.payload;
      return {...state, value};
    default:
      return state;
  }
}