import { array } from "prop-types";

export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "Number 2",
    completed: false,
    id: 338942342
  }
];

export const myReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TODO":
      return [
        ...state,
        { item: action.payload, id: Date.now(), completed: false }
      ];
    case "TOGGLE_TODO":
      return state.map(item => {
        if (item.id === action.payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    case "CLEAR_COMPLETED":
      return state.filter(item => !item.completed);
    default:
      return state;
  }
};
