import Type from "./Types";

export const toggleDropdown = () => ({
  type: Type.TOGGLE_DROPDOWN
});

export const addItem = item => ({
  type: Type.ADD_ITEM,
  payload: item
});
