import { createActions, createReducer } from 'reduxsauce'

const { Types, Creators } = createActions({
  add: [],
  update: ["payload"],
  delete: ["payload"],
});

const INITIAL_STATE = {
  todo: []
}

const addData = (state = INITIAL_STATE) => {
  const length = state.todo.length
  const todo = [...state.todo, { id: length + 1, task: `ToDo ${length + 1}` }]
  return { ...state, todo }
}

const updateData = (state = INITIAL_STATE, action) => {
  const todoUpdate = [...state.todo]
  const selectedIndex = todoUpdate.indexOf(action.payload)
  const selecteItem = { ...todoUpdate[selectedIndex] }
  selecteItem.task = `ToDo ${selecteItem.id} updated data`
  todoUpdate[selectedIndex] = selecteItem
  return { ...state, todo: todoUpdate }
}

const deleteData = (state = INITIAL_STATE, action) => {
  const todoforDelete = [...state.todo]
  todoforDelete.splice(todoforDelete.indexOf(action.payload), 1)
  return { ...state, todo: todoforDelete }
}

const reduxSauceReducer = createReducer(INITIAL_STATE, {
  [Types.ADD]: addData,
  [Types.UPDATE]: updateData,
  [Types.DELETE]: deleteData
});

export {
  reduxSauceReducer,
  Creators
}