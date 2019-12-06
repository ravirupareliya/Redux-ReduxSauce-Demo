const INITIAL_STATE = {
  todo: []
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "Add":
      const length = state.todo.length
      const todo = [...state.todo, { id: length + 1, task: `ToDo ${length + 1}` }]
      return { ...state, todo }

    case "Delete":
      const todoforDelete = [...state.todo]
      todoforDelete.splice(todoforDelete.indexOf(action.payload), 1)
      return { ...state, todo: todoforDelete }

    case "Update":
      const todoUpdate = [...state.todo]
      const selectedIndex = todoUpdate.indexOf(action.payload)
      const selecteItem = { ...todoUpdate[selectedIndex] }
      selecteItem.task = `ToDo ${selecteItem.id} updated data`
      todoUpdate[selectedIndex] = selecteItem
      return { ...state, todo: todoUpdate }
  }
  
  return state
}

export default reducer