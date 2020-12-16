import {nanoid} from 'nanoid';
import {ADD_SERVICE, REMOVE_SERVICE} from '../actions/actionTypes'

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      return [...state, {'id': nanoid(), 'name': action.payload.name, 'price' : Number(action.payload.price)}];
    case REMOVE_SERVICE:
      return state.filter(service => service.id !== action.payload.id);
    default:
      return state;
  }
}