
export const addToList = {
  type: "Add"
};

export const deleteFromList = payload => ({
  type: "Delete",
  payload
});

export const updateList = payload => ({
  type: "Update",
  payload
});
