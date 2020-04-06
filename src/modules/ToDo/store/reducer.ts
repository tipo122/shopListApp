import { actionTypes } from './actions'
import { Action } from 'redux-actions'

export interface ToDoState {
  isLoading: boolean
}

const initialState = {
  isLoading: false,
}

export const todoReducer = (
  state: ToDoState = initialState,
  action: Action<any>,
): ToDoState => {
  switch (action.type) {
    case actionTypes.SAMPLE_ACTION:
      return { ...state, isLoading: true }
    default:
      return state
  }
}
